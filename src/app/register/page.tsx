import RegisterForm from '@/components/RegisterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32">
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
} 