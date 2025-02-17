'use client'

import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'

type Props = {
  label: string
  name: string
}

export default function ImagePicker({ name }: Props) {
  const [pickedImage, setPickedImage] = useState<null | string>(null)

  const imageInputRef = useRef<null | HTMLInputElement>(null)

  function handleClick() {
    imageInputRef?.current?.click()
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className="picker">
      <div className="flex items-start gap-6 mb-4">
        <div className="size-40 border-2 border-gray-400 flex justify-center items-center relative ">
          {!pickedImage && (
            <p className="m-0 p-4 text-center"> No image picked yet.</p>
          )}
          {pickedImage && (
            <Image
              className="object-cover"
              src={pickedImage}
              fill
              alt="Image picked by user"
            />
          )}
        </div>
        <input
          ref={imageInputRef}
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className="border-0 py-2 px-6 bg-gray-400 cursor-pointer hover:bg-gray-500"
          onClick={handleClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
