import styles from './lisensePage.module.scss'
import { Title } from '../../components/Title/Title'

export const LisensePage = () => {
    return (
        <section className={`${styles.Lisense}`}>
            <Title name={'Licenses'} text={'All the images and icons used in this template are fully licensed for free and commercial use those links are listed.'} />
            <div className={`${styles.LisenseContainer} paddings container`}>
              
            <div className={` ${styles.LisenseContainerContent} flexColStart`}>
               <h3>Photography</h3>
               <p className={`inter`}>All images used in the <span>Pages</span> Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <span> <a href="https://unsplash.com/">Unsplash</a></span> , <span> <a href="https://www.pexels.com/"> Pexels.</a></span></p>
            <div className={`${styles.LisenseContainerContentPexels} `}>
                <h4>Pexels: <a href="">License</a></h4>
                <ul className={`d-flex`}>
                    <li><a href="https://www.pexels.com/photo/selective-focus-photo-of-woman-reading-book-1313809/" target='_blank'>Image 1, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/man-reading-book-3135883/" target='_blank'>Image 2, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/woman-in-yellow-sweater-while-reading-a-book-3786748/" target='_blank'>Image 3, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/busy-lady-talking-on-smartphone-and-writing-in-notebook-while-working-remotely-at-home-4467787/" target='_blank'>Image 4, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/man-with-gray-hair-on-couch-with-laptop-10223586/" target='_blank'>Image 5, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/woman-in-knitted-sweater-and-denim-jeans-reading-a-book-5427135/" target='_blank'>Image 6, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/photo-of-a-woman-in-a-green-apron-looking-at-the-camera-6957673/" target='_blank'>Image 7, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/man-with-gray-hair-sitting-on-couch-with-cup-in-hands-10223598/" target='_blank'>Image 8, &nbsp;</a></li>
                    <li><a href="https://www.pexels.com/photo/a-man-wearing-eyeglasses-looking-the-laptop-10223865/" target='_blank'>Image 9 &nbsp;</a></li>
                </ul>
            </div>
            <div className={`${styles.LisenseContainerContentUnsplash}`}>
                <h4>Unsplash: <a href="https://unsplash.com/license">License</a></h4>
                <ul className={`d-flex`}>
                    <li><a href="https://unsplash.com/photos/t8yimzM2bEY" target='_blank'>Image 1, &nbsp;</a></li>
                    <li><a href="https://unsplash.com/photos/oRsSeYqJUgY" target='_blank'>Image 2, &nbsp;</a></li>
                    <li><a href="https://unsplash.com/photos/p-th9JVqrkY" target='_blank'>Image 3, &nbsp;</a></li>
                    <li><a href="https://unsplash.com/photos/edzkr3S1u60" target='_blank'>Image 4 &nbsp;</a></li>
                </ul>
            </div>
            <div className={`${styles.LisenseContainerContentFonts}`}>
                <h3>Fonts</h3>
               <p>Pages template uses free licensed <span> <a href="https://fonts.google.com/" target='_blank'>Google Fonts</a></span>. Please check <span><a href="https://fonts.google.com/specimen/Cardo#license">Cardo</a></span> and <span><a href="https://fonts.google.com/specimen/Inter#license">Inter</a></span>.</p>
            </div>
            
            </div>
            
            </div>
        </section>
    )
}