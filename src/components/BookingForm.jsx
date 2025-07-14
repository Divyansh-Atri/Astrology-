import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Mail, Phone, Star } from 'lucide-react';
import {createAppointment} from "@/firebase/slots"
const BookingForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    service: 'Astrology Reading',
    status: 'upcoming'
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Appointment time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Create appointment directly without authentication
      const response = await createAppointment(formData);
      
      toast({
        title: "Booking Successful!",
        description: "Your cosmic consultation has been scheduled successfully.",
      });

      // Reset form
      setFormData({
        patientName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: '',
        service: 'Astrology Reading',
        status: 'upcoming'
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      const errorMessage = error.response?.data?.message || "Failed to schedule your cosmic consultation. Please try again.";
      
      toast({
        title: "Booking Failed",
        description: errorMessage,
        variant: "destructive",
      });

      // If the error is about an already booked slot, clear the time selection
      if (errorMessage.includes("already booked")) {
        setFormData(prev => ({ ...prev, appointmentTime: '' }));
      }
    }
  };

  const handleInputChange = (field, value) => {
    if (field === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, phone: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="max-w-3xl w-full mx-auto bg-gradient-to-br from-black/50 via-purple-900/40 to-indigo-900/40 border border-purple-700/40 shadow-2xl rounded-[2.5rem] my-16 px-2 sm:px-8 py-8 sm:py-12">
      <CardHeader>
        <CardTitle className="text-center text-white text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3 py-6">
          <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
          Book Your Cosmic Reading
          <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2 bg-gradient-to-br from-purple-800/40 to-black/10 rounded-2xl p-5 shadow-md">
              <Label htmlFor="patientName" className="text-purple-200 flex items-center gap-2 font-semibold">
                <User className="w-4 h-4" />
                Your Name <span className="text-pink-400">*</span>
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
                className="bg-black/30 border border-purple-700/40 text-black placeholder:text-purple-300 rounded-lg"
                placeholder="Enter your full name"
              />
              {errors.patientName && <p className="text-red-400 text-xs">{errors.patientName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2 bg-gradient-to-br from-indigo-800/40 to-black/10 rounded-2xl p-5 shadow-md">
              <Label htmlFor="email" className="text-purple-200 flex items-center gap-2 font-semibold">
                <Mail className="w-4 h-4" />
                Email <span className="text-pink-400">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-black/30 border border-purple-700/40 text-black placeholder:text-purple-300 rounded-lg"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2 bg-gradient-to-br from-pink-800/40 to-black/10 rounded-2xl p-5 shadow-md">
              <Label htmlFor="phone" className="text-purple-200 flex items-center gap-2 font-semibold">
                <Phone className="w-4 h-4" />
                Phone <span className="text-pink-400">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-black/30 border border-purple-700/40 text-black placeholder:text-purple-300 rounded-lg"
                placeholder="1234567890"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
            </div>

            {/* Appointment Date */}
            <div className="space-y-2 bg-gradient-to-br from-yellow-900/30 to-black/10 rounded-2xl p-5 shadow-md">
              <Label htmlFor="appointmentDate" className="text-purple-200 flex items-center gap-2 font-semibold">
                <Calendar className="w-4 h-4" />
                Date <span className="text-pink-400">*</span>
              </Label>
              <Input
                id="appointmentDate"
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                className="bg-black/30 border border-purple-700/40 text-black placeholder:text-purple-300 rounded-lg"
              />
              {errors.appointmentDate && <p className="text-red-400 text-xs">{errors.appointmentDate}</p>}
            </div>
          </div>

          {/* Appointment Time */}
          <div className="space-y-2 bg-gradient-to-br from-[#2d184a]/60 via-[#1a1a2e]/40 to-[#2e1a47]/60 rounded-2xl p-5 shadow-md">
            <Label htmlFor="appointmentTime" className="text-purple-200 flex items-center gap-2 font-semibold">
              <Clock className="w-4 h-4" />
              Time <span className="text-pink-400">*</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  onClick={() => handleInputChange('appointmentTime', time)}
                  variant="ghost"
                  className={`
                    rounded-xl font-semibold transition-all duration-200 border-0
                    ${
                      formData.appointmentTime === time
                        ? 'bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500 text-black shadow-xl ring-2 ring-fuchsia-300/70 scale-105 animate-pulse'
                        : 'bg-white/10 text-white hover:bg-fuchsia-700/30 hover:text-white border border-purple-700/30 backdrop-blur-md'
                    }
                  `}
                  style={{
                    boxShadow: formData.appointmentTime === time
                      ? '0 0 16px 4px #d946ef66, 0 2px 8px 0 #0004'
                      : undefined
                  }}
                >
                  {time}
                </Button>
              ))}
            </div>
            {errors.appointmentTime && <p className="text-red-400 text-xs">{errors.appointmentTime}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-4 mb-2">
            <Button
              type="submit"
              className={`
                w-full
                bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#818cf8]
                text-white py-4 rounded-2xl font-extrabold text-xl
                shadow-[0_4px_32px_0_rgba(168,139,250,0.25)]
                border-0 outline-none tracking-wide
                relative overflow-hidden
                transition-all duration-200
                hover:scale-105
                before:absolute before:inset-0 before:rounded-2xl
                before:bg-gradient-to-r before:from-pink-400/40 before:via-purple-400/30 before:to-indigo-400/30
                before:blur-lg before:opacity-60 before:transition-all before:duration-300
                hover:before:opacity-90
                focus:ring-4 focus:ring-pink-400/40
              `}
              style={{
                zIndex: 1
              }}
            >
              <span className="relative flex items-center justify-center gap-4 z-10">
                <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
                Book Your Reading
                <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
              </span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
