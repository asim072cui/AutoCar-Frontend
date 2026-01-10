import { useState } from "react";
import toast from "react-hot-toast";
import { X, Upload, Trash2 } from "lucide-react";

const AddCarModal = ({ open, onClose, onCreated }) => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    section: "Buy Car",
    name: "",
    images: [],
    location: "",
    seats: "",
    gas: "",
    transmission: "",
    description: "",
    price: "",
    rating : "",
    ratingCount : "",
    owner: {
      name: "",
      email: "",
      phone: "",
      img: "",
    },
  });

  if (!open) return null;

  // 🔹 IMAGE UPLOAD (Cloudinary)
  const uploadImages = async (files) => {
    if (!files || files.length === 0) return;
    
    setUploading(true);
    const uploaded = [];

    try {
      console.log("📤 Starting upload for", files.length, "file(s)");
      
      for (let file of files) {
        const fd = new FormData();
        fd.append("file", file);

        console.log("⬆️ Uploading file:", file.name);

        const res = await fetch(
          "https://auto-car-backend.vercel.app/api/upload/load",
          {
            method: "POST",
            body: fd,
          }
        );

        const data = await res.json();
        console.log("📥 Upload response:", data);
        
        // Check for both 'url' and 'secure_url' (backend might return either)
        const imageUrl = data.secure_url || data.url;
        
        if (imageUrl) {
          uploaded.push(imageUrl);
          console.log("✅ Image URL saved:", imageUrl);
        } else {
          console.log("❌ No URL in response:", data);
        }
      }

      console.log("📦 Total uploaded images:", uploaded);

      if (uploaded.length > 0) {
        setForm((prev) => {
          const newImages = [...prev.images, ...uploaded];
          console.log("💾 Form images updated to:", newImages);
          return { ...prev, images: newImages };
        });
        toast.success(`${uploaded.length} image(s) uploaded successfully!`);
      } else {
        toast.error("No images were uploaded");
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      toast.error("Image upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  // Remove image from list
  const removeImage = (index) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

    const createCar = async () => {
    if (form.images.length === 0) {
      toast.error("Please upload at least one image");
      console.log("Button is clicked");
      return;
    }

    if (!form.name || !form.location || !form.seats || !form.gas || !form.transmission || !form.price) {
      toast.error("Please fill all required fields");
      console.log("Button is clicked");
      return;
    }

    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("admin"))?.token;

      // Clean up the form data to ensure images is a proper array of strings
      const carData = {
        ...form,
        images: form.images.filter(img => img && img.trim() !== ""),
        seats: parseInt(form.seats),
        price: parseFloat(form.price),
      };

      console.log("Sending car data:", carData);

      const res = await fetch("https://auto-car-backend.vercel.app/api/cars/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error);
      }

      toast.success("Car created successfully!");
      onCreated?.(data.car);
      onClose();
      
      // Reset form
      setForm({
        section: "Buy Car",
        name: "",
        images: [],
        location: "",
        seats: "",
        gas: "",
        transmission: "",
        description: "",
        price: "",
        rating : "",
        ratingCount : "",
        owner: {
          name: "",
          email: "",
          phone: "",
          img: "",
        },
      });
    } catch (err) {
      console.error("Create car error:", err);
      toast.error(err.message || "Failed to create car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header with Close Button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Add New Car</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="space-y-4">
            {/* Section Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Section Type <span className="text-red-500">*</span>
              </label>
              <select
                value={form.section}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, section: e.target.value })}
              >
                <option>Buy Car</option>
                <option>Rent Car</option>
              </select>
            </div>

            {/* Car Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Car Name <span className="text-red-500">*</span>
              </label>
              <input
                value={form.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Toyota Camry 2024"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Grid Layout for smaller fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.location}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City, Country"
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seats <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.seats}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  placeholder="5"
                  onChange={(e) => setForm({ ...form, seats: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gas Type <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.gas}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Petrol, Diesel, Electric"
                  onChange={(e) => setForm({ ...form, gas: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Transmission <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.transmission}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Automatic, Manual"
                  onChange={(e) => setForm({ ...form, transmission: e.target.value })}
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                value={form.price}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="5000"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={form.description}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                placeholder="Car description..."
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            {/* OWNER INFO */}
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Owner Information</h3>
              
              <div className="space-y-3">
                <input
                  value={form.owner.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Owner Name"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      owner: { ...form.owner, name: e.target.value },
                    })
                  }
                />

                <input
                  value={form.owner.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Owner Email"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      owner: { ...form.owner, email: e.target.value },
                    })
                  }
                />

                <input
                  value={form.owner.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Owner Phone"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      owner: { ...form.owner, phone: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            { /* Rating and Rating Count */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating
                </label>
                <input
                    value={form.rating}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="4.5"
                    onChange={(e) => setForm({ ...form, rating: e.target.value })}
                />
              </div>    
                <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating Count
                </label>
                <input

                    value={form.ratingCount}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="150"
                    onChange={(e) => setForm({ ...form, ratingCount: e.target.value })}
                />
              </div>
            </div>

            {/* IMAGE UPLOAD SECTION */}
            <div className="border-t pt-4 mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Car Images <span className="text-red-500">*</span> (At least 1 image required)
              </label>
              
              {/* Upload Button */}
              <div className="mb-4">
                <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">
                      {uploading ? "Uploading..." : "Click to upload images"}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, JPEG up to 5MB</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => uploadImages(e.target.files)}
                  />
                </label>
              </div>

              {/* Image Preview Grid */}
              {form.images.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {form.images.map((img, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={img}
                        alt={`Preview ${i + 1}`}
                        className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={14} />
                      </button>
                      <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        Image {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {uploading && (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-sm text-gray-600">Uploading images...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={createCar}
            disabled={loading || uploading}
            className="flex-1 px-4 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? "Creating..." : "Create Car"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCarModal;
