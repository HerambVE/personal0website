import { gabarito, poppins } from "../../../../styles/fonts";
import Readme from "../../../../styles/readme";
import Projects from "../../../../styles/projects";
import { Resume, Email } from "../../../../styles/icon";

export default function Page() {
  return (
    <div className="w-[90vw] min-h-[75vh] h-fit mx-auto mt-10 pt-8 px-4 flex flex-col gap-6">
      
      {/* Header Section */}
      <div className="flex items-center text-blue-50 w-fit px-1">
        <div className={`${gabarito.className} flex flex-col gap-6 w-[25%] max-w-md pr-8 py-2 border-r-4 border-white/20 mr-8`}>
  {/* Name */}
  <h1 className="text-white font-semibold leading-tight tracking-tight text-[clamp(2.8rem,6vw,5rem)]">
  I am <span className="block text-[110%]">Heramb</span>
  </h1>

  {/* Meta */}
  <div className="flex items-center justify-between text-white/70 text-[clamp(0.95rem,1.5vw,1.2rem)]">
    <span className="tracking-wide">SWE / AIE</span>
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
      Mumbai, India
    </span>
  </div>
</div>
        
        <div className="flex-1">
          <Readme />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex gap-6 w-full">
        {/* Projects Column */}
        <div className="w-[60%] h-fit rounded-2xl p-4 bg-[#23232540] overflow-visible">
          <Projects />
        </div>

        {/* Info & Links Column */}
        <div className="w-[40%] flex flex-col gap-4">
          {/* Contact Actions */}
          <div className="flex gap-4 text-cyan-50">
            <div id="email" className="flex-1 flex items-center justify-center p-6 bg-[#232323] rounded-2xl cursor-pointer hover:bg-[#2a2a2a] transition-colors">
              <Email />
              <h3 className={`${poppins.className} text-xl ml-4 whitespace-nowrap`}>Mail Me</h3>
            </div>
            <div id="resume" className="flex-1 flex items-center justify-center p-6 bg-[#232323] rounded-2xl cursor-pointer hover:bg-[#2a2a2a] transition-colors">
              <Resume />
              <h3 className={`${poppins.className} text-xl ml-4`}>Resume</h3>
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex-1 rounded-2xl p-6 bg-[#23232540] text-cyan-50 border border-white/5">
  <h3 className={`${gabarito.className} text-2xl mb-6 font-medium tracking-tight`}>
    Experience
  </h3>
  
  <div className="flex flex-col gap-6">
    <div className="relative pl-4 border-l-2 border-cyan-50/20">
      <h4 className={`${poppins.className} text-lg font-semibold text-white`}>
        Product Implementation Intern
      </h4>
      <p className="text-white/50 text-sm mb-4 uppercase tracking-widest">
        <strong>
        Atera RMM Deployment
        </strong>
      </p>

      <ul className="flex flex-col gap-4 text-md text-white/80 leading-relaxed">
        {/* Point 1: Core Implementation */}
        <li className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
          <span>
            Led the <strong>Product Implementation</strong> of Atera RMM, conducting feasibility testing to integrate automated monitoring into existing corporate workflows.
          </span>
        </li>

        {/* Point 2: Systems & CRM */}
        <li className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
          <span>
            Managed full-stack IT operations involving <strong>Ticketing Systems</strong> and CRM synchronization to optimize technical support response times.
          </span>
        </li>

        {/* Point 3: Security & Infrastructure */}
        <li className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
          <span>
            Gained hands-on experience in infrastructure security by auditing <strong>Firewall Logs</strong> and monitoring network health through RMM agents.
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
      </div>

    </div>
  );
}
{/* <h1 className={`${gabarito.className} font-semibold leading-tight
                  tracking-tight
                  text-[clamp(2.8rem,6vw,4.5rem)]`}>
                  Thank You
                  </h1> */}