"use client";
import { Employee } from '../employee-component/typechard';

// Get API base URL from environment or default to localhost
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://auto-car-backend.vercel.app';

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`https://auto-car-backend.vercel.app/api/employee/all-employees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      cache: 'no-store', // Disable caching for real-time data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch employees: ${response.statusText}`);
    }

    const data = await response.json();
    return data.employees || [];
  } catch (error) {
    console.error('Error fetching employees:', error);
    // Return empty array on error to prevent dashboard from breaking
    return [];
  }
};

export const fetchEmployeeById = async (id: string): Promise<Employee | null> => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://auto-car-backend.vercel.app/api/employee/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch employee: ${response.statusText}`);
    }

    const data = await response.json();
    return data.employee || null;
  } catch (error) {
    console.error('Error fetching employee by ID:', error);
    return null;
  }
};

export const   fetchEmployeeupdatestatusbyId = async (id: string, status: string): Promise<Employee | null> => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://auto-car-backend.vercel.app/api/employee/update-status/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      body: JSON.stringify({ status }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to update employee status: ${response.statusText}`);
    }

    const data = await response.json();
    return data.employee || null;
  } catch (error) {
    console.error('Error updating employee status by ID:', error);
    return null;
  }
};

export const deleteEmployeeById = async (id: string): Promise<boolean> => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://auto-car-backend.vercel.app/api/employee/delete-employee/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete employee: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Error deleting employee by ID:', error);
    return false;
  }
};

export const fetchEmployeeApplicationsByEmail = async (email: string): Promise<{ total: number; employees: Employee[] }> => {
  try {
    const response = await fetch(`https://auto-car-backend.vercel.app/api/employee/employee-records?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch employee applications: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      total: data.total || 0,
      employees: data.employees || []
    };
  } catch (error) {
    console.error('Error fetching employee applications by email:', error);
    return {
      total: 0,
      employees: []
    };
  }
};