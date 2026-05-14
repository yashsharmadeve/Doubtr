import { Camera, Mail, Phone, MapPin, Award, BookOpen, Edit3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];
const achievements = [
  { title: '7-day streak', desc: 'Learn every day', icon: '🔥' },
  { title: '100 doubts solved', desc: 'Curious mind', icon: '🎯' },
  { title: 'Top scorer', desc: 'Above 90% accuracy', icon: '🏆' },
  { title: 'Night owl', desc: '10+ late sessions', icon: '🦉' },
];

export default function ProfileClient() {
  return (
    <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="relative overflow-hidden rounded-3xl border-border/70 p-0">
        <div className="h-28 bg-hero relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        </div>
        <div className="px-6 pb-6 -mt-14 flex flex-col md:flex-row md:items-end gap-5">
          <div className="relative shrink-0">
            <div className="h-28 w-28 rounded-3xl bg-gradient-primary border-4 border-background flex items-center justify-center text-4xl font-semibold text-primary-foreground shadow-elegant">
              A
            </div>
            <button className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-serif">Aarav Sharma</h1>
            <p className="text-muted-foreground">Class 10 · CBSE · Hindi & English</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-gradient-primary text-primary-foreground border-0">
                Pro learner
              </Badge>
              <Badge variant="outline">Joined Mar 2026</Badge>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl">
            <Edit3 className="h-4 w-4 mr-2" /> Edit profile
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal info */}
        <Card className="lg:col-span-2 p-6 rounded-2xl border-border/70 space-y-5">
          <h2 className="text-xl font-semibold">Personal information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Full name</Label>
              <Input defaultValue="Aarav Sharma" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Mobile</Label>
              <Input defaultValue="+91 98765 43210" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Email</Label>
              <Input defaultValue="aarav.sharma@email.com" type="email" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">City</Label>
              <Input defaultValue="Bengaluru, India" />
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <h3 className="font-semibold mb-3">Academic</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs">Class</Label>
                <Input defaultValue="10" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Board</Label>
                <Input defaultValue="CBSE" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Preferred language</Label>
                <Input defaultValue="English" />
              </div>
            </div>
            <div className="mt-4">
              <Label className="text-xs">Subject preferences</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {subjects.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
                <button className="px-3 py-1.5 rounded-full border border-dashed border-border text-sm text-muted-foreground hover:bg-muted">
                  + Add
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-gradient-primary text-primary-foreground">Save changes</Button>
          </div>
        </Card>

        {/* Side */}
        <div className="space-y-6">
          <Card className="p-6 rounded-2xl border-border/70">
            <h3 className="font-semibold mb-4">Quick info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" /> aarav.sharma@email.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" /> Bengaluru, India
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-muted-foreground" /> Class 10 · CBSE
              </li>
            </ul>
          </Card>

          <Card className="p-6 rounded-2xl border-border/70">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Achievements</h3>
              <Award className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="p-3 rounded-xl border border-border/70 hover:bg-muted/30"
                >
                  <div className="text-2xl">{a.icon}</div>
                  <div className="text-sm font-medium mt-1">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
