export const scrollFunck = (type: string) => {
    const element = document.getElementById(type)
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        })
    }
}