import { Camera, Mail, Phone, MapPin, Award, Edit3, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const subjects = ['Mathematics', 'Physics'];
const classes = ['9', '10', '11', '12'];
const boards = ['CBSE', 'ICSE'];
const languages = ['English', 'Hindi'];

export default function ProfileClient() {
  return (
    <div className="px-6 lg:px-10 py-8 max-w-6xl mx-auto space-y-6">
      <Card className="relative overflow-hidden rounded-3xl border-border/70 p-0">
        <div className="h-36 bg-hero relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        </div>
        <div className="px-6 pb-6 -mt-14 flex flex-col md:flex-row md:items-end gap-5">
          <div className="relative shrink-0">
            <div className="h-28 w-28 rounded-3xl bg-gradient-primary border-4 border-background flex items-center justify-center text-4xl font-semibold text-primary-foreground shadow-elegant">
              P
            </div>
            <button className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-serif">Priya Nair</h1>
            <p className="text-muted-foreground">Mathematics & Physics · 8 yrs experience</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-gradient-primary text-primary-foreground border-0">
                Verified
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-accent text-accent" /> 4.9 · 187 reviews
              </Badge>
              <Badge variant="outline">Joined Mar 2024</Badge>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl">
            <Edit3 className="h-4 w-4 mr-2" /> Edit profile
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 rounded-2xl border-border/70 space-y-5">
          <h2 className="text-xl font-semibold">Professional information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Full name</Label>
              <Input defaultValue="Priya Nair" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Mobile</Label>
              <Input defaultValue="+91 99887 65432" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Email</Label>
              <Input defaultValue="priya.nair@email.com" type="email" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">City</Label>
              <Input defaultValue="Pune, India" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Highest qualification</Label>
              <Input defaultValue="M.Sc. Mathematics, IIT Bombay" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Experience (years)</Label>
              <Input defaultValue="8" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs">About me</Label>
            <Textarea
              defaultValue="Patient and concept-first teacher with 8 years of experience helping students master Maths & Physics for CBSE and ICSE boards."
              rows={3}
            />
          </div>

          <div className="pt-3 border-t border-border space-y-4">
            <h3 className="font-semibold">Teaching scope</h3>
            <div>
              <Label className="text-xs">Subjects</Label>
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
            <div>
              <Label className="text-xs">Classes</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {classes.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium">
                    Class {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Boards</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {boards.map((b) => (
                    <Badge key={b} variant="outline">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-xs">Languages</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {languages.map((l) => (
                    <Badge key={l} variant="outline">
                      {l}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-gradient-primary text-primary-foreground">Save changes</Button>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 rounded-2xl border-border/70">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" /> priya.nair@email.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" /> +91 99887 65432
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" /> Pune, India
              </li>
            </ul>
          </Card>

          <Card className="p-6 rounded-2xl border-border/70">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recognition</h3>
              <Award className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: 'Top 1% rated', d: 'Across maths tutors', i: '🏆' },
                { t: '500+ doubts', d: 'Answered this year', i: '🎯' },
                { t: 'Quick responder', d: 'Avg <2 min', i: '⚡' },
                { t: 'Loved by students', d: '92% repeat rate', i: '💜' },
              ].map((a) => (
                <div key={a.t} className="p-3 rounded-xl border border-border/70 hover:bg-muted/30">
                  <div className="text-2xl">{a.i}</div>
                  <div className="text-sm font-medium mt-1">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.d}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
