
export const getWhatsappUrl = (text: string) => {
    return `https://api.whatsapp.com/send?text=${text}`;
}