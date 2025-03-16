import { collection, query, where, getDocs, orderBy, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export interface JobHistoryItem {
  jobId: string;
  title: string;
  url: string;
  riskScore: number;
  riskLevel: string;
  timestamp: any; // Firebase Timestamp
  userId: string;
  notes?: string;
  status?: 'viewed' | 'applied' | 'rejected' | 'favorite';
  clientInfo?: any;
}

/**
 * Получение истории проанализированных вакансий для авторизованного пользователя
 */
export async function getUserJobHistory(userId: string): Promise<JobHistoryItem[]> {
  try {
    const jobsRef = collection(db, 'job_history');
    const q = query(
      jobsRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const jobHistory: JobHistoryItem[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data() as JobHistoryItem;
      jobHistory.push({
        ...data,
        jobId: doc.id
      });
    });
    
    return jobHistory;
  } catch (error) {
    console.error('Ошибка при получении истории вакансий:', error);
    return [];
  }
}

/**
 * Обновление статуса или заметок для вакансии
 */
export async function updateJobStatus(
  jobId: string, 
  updates: { status?: string; notes?: string }
): Promise<boolean> {
  try {
    const jobRef = doc(db, 'job_history', jobId);
    await updateDoc(jobRef, updates);
    return true;
  } catch (error) {
    console.error('Ошибка при обновлении статуса вакансии:', error);
    return false;
  }
} 