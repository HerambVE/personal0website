export default function Readme(){
  return(
    <div className="w-auto min-w-fit whitespace-nowrap h-full mx-auto rounded-lg border border-zinc-800 bg-[#0d11171b] text-zinc-200 shadow-lg overflow-hidden">
  
  <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-[#0d11171b] text-sm text-zinc-400">
    <span className="font-mono">📄</span>
    <span className="font-mono">ABOUTME.md</span>
  </div>

  {/* Content */}
  <div className="p-6 prose prose-invert prose-zinc max-w-none">
    <h1><strong>Heramb Vengurlekar</strong></h1>
    <p className="whitespace-normal">
      AI & Backend-focused engineering student passionate about building
      emotion-aware systems, scalable APIs, and cloud-native applications.
    </p>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Languages:</strong> C/C++, Python, JavaScript</li>
      <li><strong>Frameworks:</strong> PyTorch, React, Node.js, Flask</li>
      <li><strong>Cloud:</strong> AWS (Lambda, API Gateway, DynamoDB)</li>
    </ul>

    <blockquote className="mt-[2%]">
      Create Bugs; Solve them; Get better iteratively !
    </blockquote>
  </div>
</div>
  )
};