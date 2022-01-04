import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { UserInput } from './components/UserInput';

export function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Header />
      </header>
      <main className="mx-4 sm:mx-auto sm:w-full sm:max-w-md flex-grow">
        <UserInput />
      </main>
      <footer className='mb-4'>
        <Footer />
      </footer>
    </div>
  )
}
