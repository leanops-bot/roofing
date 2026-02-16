"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Booking = () => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Generate next 5 days for date picker
    const dates = [...Array(5)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1); // Start from tomorrow
        return {
            day: d.toLocaleDateString("en-US", { weekday: "short" }),
            date: d.getDate(),
            full: d.toISOString().split("T")[0],
        };
    });

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push("/booking-success");
    };

    return (
        <Section id="booking" bg="blue" className="relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                {/* Left Side: Copy */}
                <div className="lg:w-1/3 text-white">
                    <h2 className="text-4xl font-bold mb-6">Book Your Free Roof Inspection</h2>
                    <p className="text-white/80 text-lg mb-8">
                        Select a time that works for you. Our expert team will arrive on time, inspect your roof, and provide a detailed report — zero cost, zero obligation.
                    </p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <CheckCircle size={20} /> What to expect
                        </h4>
                        <ul className="space-y-3 text-white/80">
                            <li>• 45-minute comprehensive inspection</li>
                            <li>• Drone analysis of hard-to-reach areas</li>
                            <li>• Photos of any damage found</li>
                            <li>• Instant digital estimate</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-2/3">
                    <Card className="p-6 md:p-8 shadow-2xl border-0">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Service Selection */}
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-3 uppercase tracking-wider">Service Needed</label>
                                <select className="w-full h-12 px-4 rounded-xl border border-secondary/20 bg-white text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>Roof Inspection (Free)</option>
                                    <option>Roof Repair Estimate</option>
                                    <option>Full Roof Replacement</option>
                                    <option>Storm Damage Assessment</option>
                                    <option>Commercial Roofing</option>
                                </select>
                            </div>

                            {/* Date Selection */}
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-3 uppercase tracking-wider flex items-center gap-2">
                                    <Calendar size={16} /> Select Date
                                </label>
                                <div className="grid grid-cols-5 gap-2 md:gap-4">
                                    {dates.map((date) => (
                                        <button
                                            key={date.full}
                                            type="button"
                                            onClick={() => setSelectedDate(date.full)}
                                            className={cn(
                                                "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                                selectedDate === date.full
                                                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                                                    : "bg-white border-secondary/10 text-secondary hover:border-primary/50 hover:bg-slate-50"
                                            )}
                                        >
                                            <span className="text-xs font-semibold opacity-80">{date.day}</span>
                                            <span className="text-xl font-bold">{date.date}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Selection */}
                            <div>
                                <label className="block text-sm font-bold text-secondary mb-3 uppercase tracking-wider flex items-center gap-2">
                                    <Clock size={16} /> Select Time
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={cn(
                                                "py-2 px-4 rounded-lg text-sm font-semibold border transition-all",
                                                selectedTime === time
                                                    ? "bg-primary text-white border-primary shadow-md"
                                                    : "bg-white border-secondary/10 text-secondary hover:border-primary/50"
                                            )}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">Phone</label>
                                    <input required type="tel" placeholder="(555) 123-4567" className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-secondary mb-2">Address</label>
                                    <input required type="text" placeholder="1234 Main St, Tampa, FL" className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full text-lg h-14"
                                isLoading={isLoading}
                                disabled={!selectedDate || !selectedTime}
                            >
                                Confirm Booking
                            </Button>

                            <div className="text-center text-xs text-secondary/40">
                                By booking, you agree to receive SMS updates about your appointment.
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
