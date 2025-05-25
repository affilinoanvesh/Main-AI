import React, { useState, useEffect } from 'react';
import { HelpCircle, DollarSign, TrendingUp, Clock, Users, Calculator as CalcIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Calculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(11);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Calculated values
  const [annualSavings, setAnnualSavings] = useState(0);
  const [growthValue, setGrowthValue] = useState(0);
  const [roi, setRoi] = useState(0);
  const [costOfInaction, setCostOfInaction] = useState(0);
  const [fteHours, setFteHours] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);
  const [aiCost, setAiCost] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  // Calculate all values when inputs change
  useEffect(() => {
    const calculateValues = () => {
      const weeklySavings = employees * hoursPerWeek * hourlyRate;
      const annual = weeklySavings * 52;
      setAnnualSavings(annual);
      setGrowthValue(annual * 3);
      setRoi(Math.round((annual / 6000) * 100));
      setCostOfInaction(annual * 3);
      setFteHours(Math.round((employees * hoursPerWeek) / 40));
      setCurrentCost(annual);
      const aiAnnual = annual * 0.28;
      setAiCost(aiAnnual);
      setMonthlySavings((annual - aiAnnual) / 12);
    };

    calculateValues();
  }, [employees, hoursPerWeek, hourlyRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const Tooltip = ({ text }: { text: string }) => (
    <div className="group relative inline-block">
      <HelpCircle className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 text-sm text-white bg-gray-900 rounded-xl shadow-xl -left-1/2 transform -translate-x-1/2">
        {text}
      </div>
    </div>
  );

  const Slider = ({ 
    value, 
    onChange, 
    min, 
    max, 
    label, 
    tooltip,
    prefix = '',
    suffix = ''
  }: {
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    label: string;
    tooltip: string;
    prefix?: string;
    suffix?: string;
  }) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-white text-lg">{label}</label>
        <div className="flex items-center gap-2">
          <span className="text-primary-400 font-bold text-lg">
            {prefix}{value}{suffix}
          </span>
          <Tooltip text={tooltip} />
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
        <div className="absolute -bottom-6 left-0 text-xs text-gray-400">{prefix}{min}{suffix}</div>
        <div className="absolute -bottom-6 right-0 text-xs text-gray-400">{prefix}{max}{suffix}</div>
      </div>
    </div>
  );

  const MetricCard = ({ 
    title, 
    value, 
    subtitle, 
    tooltip, 
    icon: Icon,
    variant = 'light' 
  }: {
    title: string;
    value: string | number;
    subtitle?: string;
    tooltip: string;
    icon: React.ElementType;
    variant?: 'light' | 'dark';
  }) => (
    <div className={`rounded-3xl p-6 shadow-lg ${variant === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          variant === 'dark' ? 'bg-gray-800' : 'bg-primary-50'
        }`}>
          <Icon className={`w-6 h-6 ${variant === 'dark' ? 'text-primary-400' : 'text-primary-600'}`} />
        </div>
        <Tooltip text={tooltip} />
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-3xl font-bold ${variant === 'dark' ? 'text-primary-400' : 'text-primary-600'}`}>
        {value}
      </p>
      {subtitle && (
        <p className={`text-sm mt-1 ${variant === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900">
      <SEO 
        title="AI ROI Calculator"
        description="Calculate how much your business can save with AI automation. Use our calculator to see potential cost savings and ROI."
        canonical="/calculator"
      />
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Much Can <span className="bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">AI Agents</span> Save Your Business?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use our calculator to see the potential impact of AI automation on your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-5">
              <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <CalcIcon className="w-6 h-6 text-primary-400" />
                  Business Information
                </h2>
                
                <div className="space-y-12">
                  <Slider
                    value={employees}
                    onChange={setEmployees}
                    min={1}
                    max={100}
                    label="Number of Employees"
                    tooltip="Total number of employees who will benefit from AI automation"
                  />

                  <Slider
                    value={hoursPerWeek}
                    onChange={setHoursPerWeek}
                    min={1}
                    max={40}
                    label="Hours Spent on Tasks"
                    tooltip="Average hours each employee spends on tasks that could be automated"
                    suffix=" hrs/week"
                  />

                  <Slider
                    value={hourlyRate}
                    onChange={setHourlyRate}
                    min={15}
                    max={200}
                    label="Average Hourly Rate"
                    tooltip="Average hourly cost per employee including benefits"
                    prefix="$"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <MetricCard
                  title="Annual Cost Savings"
                  value={formatCurrency(annualSavings)}
                  tooltip="Estimated yearly savings from implementing AI automation"
                  icon={DollarSign}
                />

                <MetricCard
                  title="Potential Growth Value"
                  value={formatCurrency(growthValue)}
                  tooltip="Potential 3-year value from reinvesting savings"
                  icon={TrendingUp}
                  variant="dark"
                />
              </div>

              {/* Secondary Metrics */}
              <div className="grid md:grid-cols-3 gap-8">
                <MetricCard
                  title="ROI"
                  value={`${roi}%`}
                  subtitle="Return on Investment"
                  tooltip="Return on investment in the first year"
                  icon={TrendingUp}
                />

                <MetricCard
                  title="FTE Hours Freed"
                  value={fteHours}
                  subtitle="Full Time Equivalent"
                  tooltip="Full-time equivalent hours saved"
                  icon={Clock}
                />

                <MetricCard
                  title="Team Impact"
                  value={`${Math.round(hoursPerWeek * employees)} hrs/week`}
                  subtitle="Total Time Saved"
                  tooltip="Total weekly hours saved across your team"
                  icon={Users}
                />
              </div>

              {/* Cost Comparison */}
              <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-8">Cost Comparison</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 block text-sm">Current Process</span>
                      <span className="text-2xl font-bold text-white">{formatCurrency(currentCost)}</span>
                    </div>
                    <div className="h-2 w-full max-w-[200px] bg-gray-700 rounded-full">
                      <div className="h-full w-full bg-red-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 block text-sm">With AI Automation</span>
                      <span className="text-2xl font-bold text-primary-400">{formatCurrency(aiCost)}</span>
                    </div>
                    <div className="h-2 w-full max-w-[200px] bg-gray-700 rounded-full">
                      <div className="h-full w-[28%] bg-primary-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">Monthly Savings</span>
                      <span className="text-3xl font-bold text-primary-400">{formatCurrency(monthlySavings)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Start Saving Today
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Calculator;