
/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Acceuil',
    href: '#home'
  },
  {
    label: 'À Propos',
    href: '#about'
  },
  {
    label: 'Expérience',
    href: '#experience'
  },
  {
    label: 'Me contacter',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/GaetanAL'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gaetan-lohier/'
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch]">
              Travaillons ensemble
            </h2>

            <ButtonPrimary 
              href="mailto:gagaboylio@gmail.com"
              label="Envoyer"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20" >

            <div>
              <p className="mb-2">Sections</p>

              <ul>
                {sitemap.map(({ label, href}, key) => (
                  <li key={key}>
                    <a 
                    href={href} 
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Sociaux</p>

              <ul>
                {socials.map(({ label, href}, key) => (
                  <li key={key}>
                    <a 
                    href={href} 
                    target="_blank"
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a 
          href="" 
          className=""
          >
            <img 
            src="/logo.png" 
            width={40}
            height={40}
            alt="Logo" 
            />
          </a>

          <p className=" text-zinc-500 text-sm">
            &copy; 2025 <span 
            className=" text-zinc-200">Gaetan Lohier</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer