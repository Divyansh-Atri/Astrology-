import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Mail, Phone, Star } from 'lucide-react';
import { createAppointment } from "@/firebase/slots"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true); // Start loading

    try {
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

      if (errorMessage.includes("already booked")) {
        setFormData(prev => ({ ...prev, appointmentTime: '' }));
      }
    } finally {
      setIsSubmitting(false); // End loading
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
    <Card className="w-full mx-auto bg-zinc-800/50 backdrop-blur-sm border-2 border-amber-500/30 shadow-xl rounded-2xl">
      <CardHeader className="border-b border-zinc-700/50 pb-6">
        <CardTitle className="text-center text-zinc-100 text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
          ✨ Book Your Cosmic Reading ✨
        </CardTitle>
        <p className="text-center text-amber-500 text-sm mt-2">Schedule your personalized Vedic consultation</p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-zinc-200 font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-amber-500" />
                Your Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
                className="bg-zinc-900/50 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your full name"
              />
              {errors.patientName && <p className="text-red-400 text-xs">{errors.patientName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-200 font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                Email <span className="text-red-400">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-zinc-900/50 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-200 font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                Phone <span className="text-red-400">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-zinc-900/50 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="1234567890"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
            </div>

            {/* Appointment Date */}
            <div className="space-y-2">
              <Label htmlFor="appointmentDate" className="text-zinc-200 font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                Date <span className="text-red-400">*</span>
              </Label>
              <Input
                id="appointmentDate"
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                className="bg-zinc-900/50 border-zinc-600 text-zinc-100 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.appointmentDate && <p className="text-red-400 text-xs">{errors.appointmentDate}</p>}
            </div>
          </div>

          {/* Time Buttons */}
          <div className="space-y-3">
            <Label htmlFor="appointmentTime" className="text-zinc-200 font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              Select Time Slot <span className="text-red-400">*</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  onClick={() => handleInputChange('appointmentTime', time)}
                  variant="outline"
                  className={`
                rounded-lg font-semibold transition-all duration-200 border-2
                ${formData.appointmentTime === time
                      ? 'bg-amber-500 text-zinc-900 border-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/30'
                      : 'bg-zinc-900/50 text-zinc-300 border-zinc-600 hover:bg-zinc-800 hover:border-amber-500/50 hover:text-amber-500'
                    }
              `}
                >
                  {time}
                </Button>
              ))}
            </div>
            {errors.appointmentTime && <p className="text-red-400 text-xs mt-2">{errors.appointmentTime}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-900 py-6 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-amber-500/30"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-3 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                  <span>Booking...</span>
                </div>
              ) : (
                '✨ Confirm Booking ✨'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>

  );
};

export default BookingForm;
