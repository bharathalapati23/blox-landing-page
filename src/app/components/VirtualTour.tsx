import React from 'react';

interface VirtualTourProps {
  videoUrl: string;
  title: string;
}

export default function VirtualTour({ videoUrl, title }: VirtualTourProps) {
  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  
  if (!videoId) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="mb-6">
        <p className="text-gray-500 uppercase tracking-wider text-sm">VIRTUAL TOUR</p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
} 