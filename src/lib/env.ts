// Informações de Contato
export const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contato@bensystem.com.br';
export const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(41) 3333-3333';
export const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Rua Marechal Deodoro, 500 - Centro, Curitiba';
export const companyWhatsapp = process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || '5541997799375';

// Redes Sociais
export const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/bensystem';
export const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/bensystem';
export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/bensystem';

// Função para formatar o número de WhatsApp para uso em links
export const getWhatsAppLink = (message: string = 'Olá, gostaria de um orçamento para sistema de segurança da Bensystem') => {
  return `https://wa.me/${companyWhatsapp}?text=${encodeURIComponent(message)}`;
};

// Função para formatar o número de telefone para uso em links
export const getPhoneLink = () => {
  return `tel:+55${companyPhone.replace(/\D/g, '')}`;
};

// Função para formatar o endereço para uso em links do Google Maps
export const getMapLink = () => {
  return `https://maps.google.com/?q=${encodeURIComponent(companyAddress)}`;
}; 