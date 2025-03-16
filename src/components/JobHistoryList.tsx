import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, ExclamationTriangleIcon, DocumentTextIcon, CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline';
import { JobHistoryItem, updateJobStatus } from '@/lib/firestore';
import { format } from 'date-fns';
import Link from 'next/link';

interface JobHistoryListProps {
  jobs: JobHistoryItem[];
  onRefresh: () => void;
}

const statusIcons = {
  viewed: <DocumentTextIcon className="w-5 h-5 text-gray-500" />,
  applied: <CheckIcon className="w-5 h-5 text-green-500" />,
  rejected: <XMarkIcon className="w-5 h-5 text-red-500" />,
  favorite: <StarIcon className="w-5 h-5 text-yellow-500" />
};

const statusLabels = {
  viewed: 'Viewed',
  applied: 'Applied',
  rejected: 'Rejected',
  favorite: 'Favorite'
};

const riskColors: Record<string, string> = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-red-100 text-red-800 border-red-200',
  critical: 'bg-red-700 text-white border-red-800'
};

const riskBgColors: Record<string, string> = {
  low: 'bg-green-50',
  medium: 'bg-yellow-50',
  high: 'bg-red-50',
  critical: 'bg-red-50'
};

export default function JobHistoryList({ jobs, onRefresh }: JobHistoryListProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState<{ [key: string]: string }>({});
  const [isEditingNotes, setIsEditingNotes] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return format(date, 'MMM dd, yyyy HH:mm');
  };

  const handleStatusChange = async (jobId: string, newStatus: string) => {
    const success = await updateJobStatus(jobId, { status: newStatus });
    if (success) {
      onRefresh();
    }
  };

  const handleNotesChange = (jobId: string, notes: string) => {
    setEditNotes({ ...editNotes, [jobId]: notes });
  };

  const startEditingNotes = (jobId: string, currentNotes?: string) => {
    setEditNotes({ ...editNotes, [jobId]: currentNotes || '' });
    setIsEditingNotes({ ...isEditingNotes, [jobId]: true });
  };

  const saveNotes = async (jobId: string) => {
    const notes = editNotes[jobId] || '';
    const success = await updateJobStatus(jobId, { notes });
    if (success) {
      setIsEditingNotes({ ...isEditingNotes, [jobId]: false });
      onRefresh();
    }
  };

  if (jobs.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-sm">
        <ExclamationTriangleIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-900">Job History Empty</h3>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Install the Chrome extension and start analyzing job postings to see your history here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const riskLevel = job.riskLevel.toLowerCase();
        const bgColor = riskBgColors[riskLevel] || 'bg-white';
        
        return (
          <div key={job.jobId} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div 
              className={`p-5 flex items-start justify-between cursor-pointer hover:bg-gray-50`}
              onClick={() => toggleExpand(job.jobId)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {job.status && (
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {statusIcons[job.status]}
                      <span>{statusLabels[job.status]}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{job.title}</h3>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center text-xs rounded-full px-2.5 py-1 font-medium border ${riskColors[riskLevel] || 'bg-gray-100 text-gray-800'}`}>
                    Risk: {job.riskLevel}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {formatDate(job.timestamp)}
                  </span>
                </div>
              </div>
              <div className="ml-4 flex items-center">
                <div className={`text-2xl font-bold p-2 rounded-lg ${riskColors[riskLevel] || 'bg-gray-100'}`}>
                  {job.riskScore}
                </div>
                <div className="ml-3">
                  {expandedJobId === job.jobId ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            
            {expandedJobId === job.jobId && (
              <div className={`border-t border-gray-200 p-5 ${bgColor}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wide">Job Details</h4>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-700 font-medium">Risk Score:</span>
                          <div className="flex items-center gap-2">
                            <div className={`text-sm rounded-full px-2 py-0.5 ${riskColors[riskLevel] || 'bg-gray-100'}`}>
                              {job.riskLevel}
                            </div>
                            <div className={`text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full ${riskColors[riskLevel] || 'bg-gray-100'}`}>
                              {job.riskScore}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 pb-3 border-b border-gray-100">
                          <span className="text-gray-700 font-medium">URL:</span>{' '}
                          <Link href={job.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 break-all flex items-center gap-1 mt-1">
                            {job.url.substring(0, 60)}...
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </Link>
                        </div>
                        {job.clientInfo && (
                          <div>
                            <span className="text-gray-700 font-medium">Client:</span>{' '}
                            <span className="text-gray-600">{job.clientInfo.name || 'N/A'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wide">Status</h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleStatusChange(job.jobId, 'viewed')}
                          className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${job.status === 'viewed' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                        >
                          <DocumentTextIcon className="w-4 h-4 mr-1" />
                          Viewed
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(job.jobId, 'applied')}
                          className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${job.status === 'applied' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                        >
                          <CheckIcon className="w-4 h-4 mr-1" />
                          Applied
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(job.jobId, 'rejected')}
                          className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${job.status === 'rejected' ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                        >
                          <XMarkIcon className="w-4 h-4 mr-1" />
                          Rejected
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(job.jobId, 'favorite')}
                          className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${job.status === 'favorite' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                        >
                          <StarIcon className="w-4 h-4 mr-1" />
                          Favorite
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wide">Notes</h4>
                    {isEditingNotes[job.jobId] ? (
                      <div>
                        <textarea
                          value={editNotes[job.jobId] || ''}
                          onChange={(e) => handleNotesChange(job.jobId, e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                          rows={5}
                          placeholder="Add your notes about this job..."
                        />
                        <div className="mt-3 flex justify-end space-x-2">
                          <button
                            type="button"
                            onClick={() => setIsEditingNotes({ ...isEditingNotes, [job.jobId]: false })}
                            className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => saveNotes(job.jobId)}
                            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          >
                            Save Notes
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 min-h-[150px] relative">
                        {job.notes ? (
                          <p className="text-gray-700 whitespace-pre-wrap">{job.notes}</p>
                        ) : (
                          <p className="text-gray-400 italic">No notes yet. Click to add notes about this job.</p>
                        )}
                        <button
                          onClick={() => startEditingNotes(job.jobId, job.notes)}
                          className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 p-1.5 rounded-md transition-colors duration-150"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
} 