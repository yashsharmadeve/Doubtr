import { Wallet, TrendingUp, Download, ArrowUpRight, CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const months = [
  { m: 'Dec', v: 28 },
  { m: 'Jan', v: 34 },
  { m: 'Feb', v: 31 },
  { m: 'Mar', v: 38 },
  { m: 'Apr', v: 36 },
  { m: 'May', v: 42 },
];

const payouts = [
  { id: 'p1', date: 'May 1, 2026', amount: '₹36,420', status: 'Paid', method: 'UPI · priya@oksbi' },
  { id: 'p2', date: 'Apr 1, 2026', amount: '₹38,140', status: 'Paid', method: 'UPI · priya@oksbi' },
  {
    id: 'p3',
    date: 'Mar 1, 2026',
    amount: '₹31,280',
    status: 'Paid',
    method: 'Bank · HDFC ••3421',
  },
];

const max = Math.max(...months.map((m) => m.v));

const EarningsClient = () => {
  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-4xl font-serif">Earnings</h1>
          <p className="text-muted-foreground mt-1">Track your income and payouts.</p>
        </div>
        <Button variant="outline" className="rounded-xl">
          <Download className="h-4 w-4 mr-2" /> Export statement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 rounded-2xl border-border/70 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-wider opacity-80">Available balance</div>
            <Wallet className="h-4 w-4 opacity-80" />
          </div>
          <div className="font-serif text-4xl mt-3">₹12,840</div>
          <Button variant="secondary" className="mt-4 rounded-lg">
            Withdraw
          </Button>
        </Card>
        <Card className="p-6 rounded-2xl border-border/70">
          <div className="text-xs text-muted-foreground uppercase tracking-wider">This month</div>
          <div className="font-serif text-3xl mt-3">₹42,380</div>
          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +18% vs last month
          </div>
        </Card>
        <Card className="p-6 rounded-2xl border-border/70">
          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            Lifetime earnings
          </div>
          <div className="font-serif text-3xl mt-3">₹4,12,680</div>
          <div className="text-xs text-muted-foreground mt-1">Since Mar 2024</div>
        </Card>
      </div>

      <Card className="p-6 rounded-2xl border-border/70">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Earnings trend</h2>
            <p className="text-sm text-muted-foreground">Last 6 months · in thousands ₹</p>
          </div>
          <Badge variant="outline">+24% YoY</Badge>
        </div>
        <div className="flex items-end gap-3 h-48">
          {months.map((m) => (
            <div key={m.m} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-primary rounded-t-lg shadow-soft transition-all hover:opacity-90"
                style={{ height: `${(m.v / max) * 100}%` }}
              />
              <div className="text-xs text-muted-foreground">{m.m}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 rounded-2xl border-border/70">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent payouts</h2>
            <Button variant="ghost" size="sm">
              See all <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
          <div className="divide-y divide-border/70">
            {payouts.map((p) => (
              <div key={p.id} className="py-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{p.date}</div>
                  <div className="text-xs text-muted-foreground">{p.method}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{p.amount}</div>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {p.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 rounded-2xl border-border/70">
          <h2 className="text-xl font-semibold">Payout method</h2>
          <p className="text-sm text-muted-foreground mb-4">Default account.</p>
          <div className="p-4 rounded-xl border border-border/70 bg-muted/30">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">UPI ID</div>
            <div className="font-medium mt-1">priya@oksbi</div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Per question: <span className="font-medium text-foreground">₹40</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Per minute: <span className="font-medium text-foreground">₹6</span>
          </div>
          <Button variant="outline" className="w-full mt-4 rounded-lg">
            Update payout details
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default EarningsClient;
