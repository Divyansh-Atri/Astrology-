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
    <Card className="w-full mx-auto bg-white border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-center text-black text-3xl md:text-4xl font-bold">
          Book Your Reading
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-black font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
                className="bg-black-50 border-black-300 text-black placeholder:text-black-400 rounded-md"
                placeholder="Enter your full name"
              />
              {errors.patientName && <p className="text-red-500 text-xs">{errors.patientName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-400 rounded-md"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-400 rounded-md"
                placeholder="1234567890"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            {/* Appointment Date */}
            <div className="space-y-2">
              <Label htmlFor="appointmentDate" className="text-black font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="appointmentDate"
                type="date"
                value={formData.appointmentDate}
                onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                className="bg-black-50 border-black-300 text-black placeholder:text-black-400 rounded-md"
              />
              {errors.appointmentDate && <p className="text-red-500 text-xs">{errors.appointmentDate}</p>}
            </div>
          </div>

          {/* Appointment Time */}
          <div className="space-y-2">
            <Label htmlFor="appointmentTime" className="text-black font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  onClick={() => handleInputChange('appointmentTime', time)}
                  variant="outline"
                  className={`
                    rounded-md font-semibold transition-all duration-200
                    ${
                      formData.appointmentTime === time
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black-300 hover:bg-black-100'
                    }
                  `}
                >
                  {time}
                </Button>
              ))}
            </div>
            {errors.appointmentTime && <p className="text-red-500 text-xs">{errors.appointmentTime}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
                {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Book Now'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
