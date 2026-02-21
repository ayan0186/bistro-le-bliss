import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        content: "6540 Orchard Lake Road, West Bloomfield, MI 48322"
    },
    {
        icon: Clock,
        title: "Hours",
        content: "Tues-Fri: 11:30am - 9pm | Sat: 5pm - 9pm | Sun & Mon: CLOSED"
    },
    {
        icon: Phone,
        title: "Contact",
        content: "(248) 325-9251"
    }
]

export function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Visit Us</h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        We look forward to welcoming you to Bistro Le Bliss.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-8">
                        {contactInfo.map((item, index) => (
                             <div key={index} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-96 rounded-lg overflow-hidden border">
                        <iframe
                            src="https://maps.google.com/maps?q=6540%20Orchard%20Lake%20Road%2C%20West%20Bloomfield%2C%20MI%2048322&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bistro Le Bliss Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
