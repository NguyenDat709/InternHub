import React from 'react';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar';
import NewsFeed from '@/components/feed/NewsFeed';
import OpportunitySidebar from '@/components/oppotunities/OpportunitySidebar';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar - Profile */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-[88px]">
          <ProfileSidebar />
        </div>
      </aside>

      {/* Center - News Feed */}
      <section className="lg:col-span-5">
        <NewsFeed />
      </section>

      {/* Right Sidebar - Opportunities */}
      <aside className="hidden lg:block lg:col-span-4">
        <div className="sticky top-[88px]">
          <OpportunitySidebar />
        </div>
      </aside>
    </div>
  );
}