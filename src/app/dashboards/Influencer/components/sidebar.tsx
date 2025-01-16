import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1e1e1e] h-screen p-4">
      <h1 className="text-xl font-bold text-[#BC9A2D] mb-6">Influencer Hub</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/influencer/dashboard">
              <a className="text-white hover:text-[#BC9A2D]">Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/influencer/profile">
              <a className="text-white hover:text-[#BC9A2D]">Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/influencer/training">
              <a className="text-white hover:text-[#BC9A2D]">Training</a>
            </Link>
          </li>
          <li>
            <Link href="/influencer/calculator">
              <a className="text-white hover:text-[#BC9A2D]">Earnings Calculator</a>
            </Link>
          </li>
          <li>
            <a
              href="https://discord.gg/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#BC9A2D]"
            >
              Community
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
