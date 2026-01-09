"use client";
import React from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface CVViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvUrl: string | null;
    employeeName?: string;
}

const CVViewerModal: React.FC<CVViewerModalProps> = ({
    isOpen,
    onClose,
    cvUrl,
    employeeName = "Employee",
}) => {
    if (!isOpen || !cvUrl) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
         <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-md transition-opacity"
          onClick={onClose}
            />
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-200">
             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-50 p-2 rounded-lg">
                            <svg
                                className="w-5 h-5 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">{employeeName}'s CV</h3>
                            <p className="text-xs text-slate-500 font-medium">PDF Preview</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* <a
                            href={cvUrl}
                            download
                            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
                            title="Download PDF"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </a> */}

                        {/* <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-200 transition-all hover:shadow-indigo-300"
                            title="Open in new tab"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="hidden sm:inline">Open New Tab</span>
                        </a> */}

                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors ml-2"
                            title="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer Area */}
                <div className="flex-1 bg-slate-50 relative">
                    <iframe
                        src={cvUrl}
                        className="w-full h-full border-0"
                        title="CV Viewer"
                    />
                </div>
            </div>
        </div>
    );
};

export default CVViewerModal;
