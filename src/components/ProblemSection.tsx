'use client';
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectAnalysisOverlay from './ProjectAnalysisOverlay';
import { SECTIONS } from '@/constants/sections';
import TimeSavingsMetric from './TimeSavingsMetric';

export default function ProblemSection() {
  return (
    <AnimatedSection>
      <div id={SECTIONS.PROBLEM} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-red-50 text-toxic-red px-4 py-2 rounded-full text-sm font-medium">
              The Problem
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-4">
              "I'll Know It When I See It" —<br/>
              <span className="text-toxic-red">How Toxic Clients Drain Your Profit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Freelancers lose $7k+/year on toxic projects. Here's what they look like:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-red-50 rounded-lg">
                  <svg className="w-6 h-6 text-toxic-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Unrealistic Expectations</h3>
                  <p className="text-gray-600 text-sm mb-4">Need full e-commerce site by tomorrow. Budget: $100</p>
                  <div className="bg-red-50 text-toxic-red text-xs font-medium px-3 py-1 rounded-full inline-block">83% below market rate</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-red-50 rounded-lg">
                  <svg className="w-6 h-6 text-toxic-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Scope Creep Risk</h3>
                  <p className="text-gray-600 text-sm mb-4">You're the expert, just figure it out!</p>
                  <div className="bg-red-50 text-toxic-red text-xs font-medium px-3 py-1 rounded-full inline-block">High risk of scope creep</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-red-50 rounded-lg">
                  <svg className="w-6 h-6 text-toxic-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Payment Risks</h3>
                  <p className="text-gray-600 text-sm mb-4">Payment after project profitability</p>
                  <div className="bg-red-50 text-danger text-xs font-medium px-3 py-1 rounded-full inline-block">Payment risk detected</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                  Live Demo
                </span>
                <TimeSavingsMetric />
              </div>
              <ProjectAnalysisOverlay />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 