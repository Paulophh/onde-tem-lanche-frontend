import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

import { api } from "../../services/api";
import { useAuthContext } from "../../contexts/AuthContext";

import AddImage from '../../assets/add-image.png';
import {
    AddImageButton,
    ImagesContainer,
    RestaurantImage,
    RestaurantImagesContainer,
    SubmitImagesContainer
} from "./styles";
import { ImageTooBigError } from "../../errors/ImageTooBigError";


const RestaurantImages = ({ restaurantImages = [], isOwnRestaurant, handleDeleteRestaurantImage }) => {
    const [selectedImagesURL, setSelectedImagesURL] = useState([]);
    const [selectedImagesFiles, setSelectedImagesFiles] = useState([]);

    const { token } = useAuthContext();

    function handleSelectImage(e) {
        try {
            const files = e.target.files

            if (!files || files.length === 0) return;

            const fileSize = files[0].size;
            if (fileSize > 5000000) throw new ImageTooBigError(); // Imagem deve ter até 5 MB

            const file = files[0];
            const fileURL = URL.createObjectURL(file);

            setSelectedImagesURL([...selectedImagesURL, fileURL]);
            setSelectedImagesFiles([...selectedImagesFiles, file]);

            const form = new FormData();
            form.append('images', file);
        } catch (error) {
            console.log(error);
        }
    }

    function handleUnelectImage(path, imageIndex) {
        console.log('Veio');
        const updatedImagesURL = selectedImagesURL.filter(imageURL => {
            return imageURL !== path;
        })

        const updatedImagesFiles = selectedImagesFiles.filter((_, index) => {
            return index !== imageIndex
        })

        setSelectedImagesURL(updatedImagesURL);
        setSelectedImagesFiles(updatedImagesFiles)

    }

    async function handleSubmitImages() {
        const imagesFile = new FormData();

        selectedImagesFiles.forEach(file => {
            imagesFile.append('images', file);
        })

        try {
            await api.post('/restaurants/image', imagesFile, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <RestaurantImagesContainer>
            <ImagesContainer>
                {
                    restaurantImages.length === 0 && !isOwnRestaurant &&
                    <span className='no-images-message'>
                        Esse restaurante não possui imagens =(
                    </span>
                }

                {
                    restaurantImages.map(image => (
                        <RestaurantImage key={image.path}>
                            <img
                                src={`${api.defaults.baseURL}/restaurants/image/${image.path}`}
                                alt=''
                            />

                            {isOwnRestaurant &&
                                <button onClick={() => handleDeleteRestaurantImage(image.image_id)}>
                                    <AiOutlineClose />
                                </button>
                            }
                        </RestaurantImage>
                    ))
                }

                {
                    selectedImagesURL.map((imageURL, imageIndex) => (
                        <RestaurantImage key={imageURL}>
                            <img
                                src={imageURL}
                                alt=''
                            />

                            {isOwnRestaurant &&
                                <button onClick={() => handleUnelectImage(imageURL, imageIndex)}>
                                    <AiOutlineClose />
                                </button>
                            }
                        </RestaurantImage>
                    ))
                }

                {
                    isOwnRestaurant && restaurantImages.length + selectedImagesURL.length < 4 &&
                    <AddImageButton htmlFor='image'>
                        <div className='image-container'>
                            <img src={AddImage} alt="" />
                        </div>
                        <span>
                            Adicionar imagem
                        </span>

                        <input
                            type="file"
                            id='image'
                            style={{ display: 'none' }}
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleSelectImage}
                        />
                    </AddImageButton>
                }
            </ImagesContainer>

            {selectedImagesURL.length > 0 &&
                <SubmitImagesContainer>
                    <button onClick={handleSubmitImages}>
                        Enviar Imagens
                    </button>
                </SubmitImagesContainer>

            }
        </RestaurantImagesContainer>
    )

}

export default RestaurantImages;