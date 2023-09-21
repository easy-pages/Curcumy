import { useEffect, useRef, useState } from "react"
import Types from "prop-types";
import lazySizes from 'lazysizes';

const OptimizedImg = ({ imgs, alt, title, object = "cover" }) => {
    //1250, 650, 300, 100 = sizes in hostImages
    const imageRef = useRef(null)
    const [src, setSrc] = useState('')

    useEffect(() => {
        let result = ''

        if(!imgs){
            result = "https://i.ibb.co/LndM23S/Imagem-n-o-exibida.webp"
            throw new Error("IMAGE IS MISSING", alt)
        }

        //check if imgs prop is a array
        if (typeof imgs == 'object') {
            if (imageRef.current) {
                const width = Math.floor(imageRef.current.getBoundingClientRect().width)

                if (width < 120) result = imgs?.thumb || imgs.small
                else if (width < 300) result = imgs.small
                else if (width < 600) result = imgs.medium
                else result = imgs.big

            }
        } else result = imgs

        setSrc(result)
    }, [alt, imgs])

    useEffect(() => {
        if (imageRef.current) {
            lazySizes.loader.unveil(imageRef.current);
        }
    }, [src]);

    return (
        <img
            className={`lazyloader w-full h-full object-${object} object-center`}
            src="https://i.ibb.co/zsRwZ69/Design-sem-nome-24.webp"
            alt={alt}
            title={title}
            data-src={src}
            data-sizes="auto"
            ref={imageRef}
        />
    )
}


OptimizedImg.propTypes = {
    imgs: Types.oneOfType([
        Types.arrayOf(
            Types.shape({
                thumb: Types.string,
                small: Types.string,
                medium: Types.string,
                big: Types.string,
            })
        ).isRequired,
        Types.string.isRequired
    ]),
    alt: Types.string.isRequired,
    title: Types.string,
    object: Types.string
}

export default OptimizedImg;