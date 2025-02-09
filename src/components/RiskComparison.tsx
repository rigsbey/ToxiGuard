'use client';

import React from 'react';

interface RiskComparisonProps {
  project: {
    redFlags: Array<{
      icon: string;
      label: string;
      tip: string;
    }>;
    safeIndicators?: Array<{
      label: string;
      tip: string;
    }>;
  };
}

const RiskComparison: React.FC<RiskComparisonProps> = ({ project }) => {
  return (
    <div className="grid md:grid-cols-2 gap-24 md:gap-32">
      {/* Toxic Project */}
      <div className="bg-red-50 p-8 md:p-12 rounded-xl border-2 border-red-200">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-red-800">
          High Risk Indicators
          <span className="block text-lg text-red-600 mt-2">
            Detected in 87% of toxic projects
          </span>
        </h3>
        <div className="space-y-6">
          {project.redFlags.map((flag, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg border border-red-200 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-red-500">{flag.icon}</span>
                <span className="font-medium text-red-800">{flag.label}</span>
              </div>
              <p className="text-sm text-red-600 mt-2">{flag.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safe Project Example */}
      <div className="bg-green-50 p-8 md:p-12 rounded-xl border-2 border-green-200">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-green-800">
          Safe Project Example
          <span className="block text-lg text-green-600 mt-2">Following best practices</span>
        </h3>
        <div className="space-y-6">
          {project.safeIndicators ? (
            project.safeIndicators.map((indicator, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium text-green-800">{indicator.label}</span>
                </div>
                <p className="text-sm text-green-600 mt-2">{indicator.tip}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No safe indicators available for this project.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskComparison; 