import { content } from "../content/page-content"

export function Footer() {
  const { about, contact, social, copyright } = content.footer

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{about.title}</h3>
            <p className="text-gray-400">
              {about.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                Telefone:{" "}
                <a
                  href={`tel:+55${contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                Endereço:{" "}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.address}
                </a>
              </li>
              <li className="pt-2 text-sm">
                {contact.certification}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{social.title}</h3>
            <div className="flex space-x-4">
              {social.items.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {copyright}</p>
        </div>
      </div>
    </footer>
  )
} 