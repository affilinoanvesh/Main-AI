import React, { useState, useEffect } from 'react';
import { HelpCircle, DollarSign } from 'lucide-react';
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
      // Annual cost savings
      const weeklySavings = employees * hoursPerWeek * hourlyRate;
      const annual = weeklySavings * 52;
      setAnnualSavings(annual);

      // Growth value (3x annual savings)
      const growth = annual * 3;
      setGrowthValue(growth);

      // ROI (assuming implementation cost of ~$6,000)
      const implementationCost = 6000;
      const roiValue = Math.round((annual / implementationCost) * 100);
      setRoi(roiValue);

      // Cost of inaction (same as growth value)
      setCostOfInaction(growth);

      // FTE Hours freed
      const fteValue = Math.round((employees * hoursPerWeek) / 40);
      setFteHours(fteValue);

      // Current process cost
      const currentAnnual = weeklySavings * 52;
      setCurrentCost(currentAnnual);

      // AI automation cost (estimated 28% of current cost)
      const aiAnnual = currentAnnual * 0.28;
      setAiCost(aiAnnual);

      // Monthly savings
      const monthly = (currentAnnual - aiAnnual) / 12;
      setMonthlySavings(monthly);
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
    <div className="group relative inline-block ml-2">
      <HelpCircle className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" />
      <div className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -left-1/2 transform -translate-x-1/2">
        {text}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="AI ROI Calculator"
        description="Calculate how much your business can save with AI automation. Use our calculator to see potential cost savings and ROI."
        canonical="/calculator"
      />
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Much Can <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">AI Agents</span> Save Your Business?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our calculator to see the potential impact of AI automation on your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-5 bg-gray-900 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Business Information</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white">Number of Employees: {employees}</label>
                    <Tooltip text="Total number of employees who will benefit from AI automation" />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white">Hours Spent on Tasks (per week, per employee): {hoursPerWeek}</label>
                    <Tooltip text="Average hours each employee spends on tasks that could be automated" />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white">Average Hourly Rate ($): {hourlyRate}</label>
                    <Tooltip text="Average hourly cost per employee including benefits" />
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Annual Cost Savings</h3>
                    <Tooltip text="Estimated yearly savings from implementing AI automation" />
                  </div>
                  <p className="text-4xl font-bold text-primary-600">{formatCurrency(annualSavings)}</p>
                </div>

                <div className="bg-gray-900 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Potential Growth Value</h3>
                    <Tooltip text="Potential 3-year value from reinvesting savings" />
                  </div>
                  <p className="text-4xl font-bold text-primary-400">{formatCurrency(growthValue)}</p>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">ROI</h3>
                    <Tooltip text="Return on investment in the first year" />
                  </div>
                  <p className="text-3xl font-bold text-primary-600">{roi}%</p>
                  <p className="text-sm text-gray-600">Return on Investment</p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Cost of Inaction</h3>
                    <Tooltip text="Potential 3-year opportunity cost" />
                  </div>
                  <p className="text-3xl font-bold text-primary-600">{formatCurrency(costOfInaction)}</p>
                  <p className="text-sm text-gray-600">3-Year Opportunity Cost</p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">FTE Hours Freed</h3>
                    <Tooltip text="Full-time equivalent hours saved" />
                  </div>
                  <p className="text-3xl font-bold text-primary-600">{fteHours}</p>
                  <p className="text-sm text-gray-600">Full Time Equivalent</p>
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-gray-900 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-white mb-6">Cost Comparison</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Current Process</span>
                    <span className="text-white font-bold">{formatCurrency(currentCost)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">With AI Automation</span>
                    <span className="text-primary-400 font-bold">{formatCurrency(aiCost)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">Monthly Savings</span>
                      <span className="text-primary-400 font-bold">{formatCurrency(monthlySavings)}</span>
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
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-medium hover:bg-primary-700 transition-all"
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