import { Link } from "react-router";

export default function ProjectCard({ id, title, category, image, description }) {
  return (
    <Link to={`/project/${id}`} className="group flex h-full"> 
      {/* h-full yahan card ko container ki poori height lene par majboor karega */}
      
      <article className="flex flex-col w-full overflow-hidden rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-xl">
        
        {/* 1. Image: aspect-video se height fix ho jayegi */}
        <div className="aspect-video overflow-hidden bg-gray-900">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>

        {/* 2. Content Area: flex-1 aur flex-col se text alignment set hogi */}
        <div className="p-6 flex flex-col flex-1">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            {category}
          </span>
          
          <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          {/* 3. Description: line-clamp se lines control hongi */}
          <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 transition-all">
            <span>View Project</span>
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}