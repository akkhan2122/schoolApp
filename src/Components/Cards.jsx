import { useState } from 'react';

const Cards = () => {
  const [images, setImages] = useState([
    'https://s3-alpha-sig.figma.com/img/ae6b/6229/6c51e9c3e8622832317244cff583e971?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hweZMoB4504te8F7s8cMXvNfVdLa7ogyoAcJ0mTZmOb-85VvmZ3Kdf1aBpotSNUnC-25prYzm3WvT12-FzE8v3X~iCsCoXibqQ1y89Y9ooKrCu7lgu6lh4ZZv9qI-PhrUMdq-eWyXUkshFlRxN6D7o8c3VPihzZ7FK41BHnnotnVcnsECJx~J1DXMFuuGR46~AWBliGyjwYulbbcdCyCLZJoti9Nj~pbXQXWS1tVWInJ8F5L1HZGLqU4E4tAnSa~RMr13YWMnFDY2cQ5-FRAkWr6kmZrxJLnWf4sNBK7QFoMyqI7wsZIzbCulzxV7TxEUkHEO3GVsRNOQ3xHgRVNVw__',
    'https://s3-alpha-sig.figma.com/img/6649/1413/08301bfe0d5748a97e968467424c5922?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5BSWb8qq5RybXTptq8bmhxoBI6vKm~C1HNFmDg8gPYIHukrDYF-Qhp9WHz6nIWiMz2PRq8Q7fkzMVJ7kszlAZQxiOpC2OUox5UhVMKEMHwJDAOevgpODyY5uitqDs6kDmZb1qlsH1dOJbq5sGkibEbOeaC~zqLC6oEvDnwmdpydZk22u1DQj6mXnO4mOZyfXh1IGNSmSMbmvJIIcoIO26dy6aX512yEDFz9nnAxnEBT6OcsnhvX8TwKsLqpbH4tkr3wBGXrLS6SyG-VG16O-8sG-Xdzy0wkdtCNsiDOL6QANVZQzoD5d9TU2imWpe3F2Ca0MqOOGV84Y-m2SHpKWQ__',
    'https://s3-alpha-sig.figma.com/img/3f4a/d796/e4430f32ff625c7f3dfbb9de31e650cc?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXtzmNWFq8tyt03WrnY3hPfRWlUJ6eDfRM9kNwYsgIVvORMmU6TQjdob9jeqBbkFB3XBu1793yjaZMb10KPDWhRp-KHHwz6ye7N0QQJgR~nQUfSO31Kr9MCzfzxOLiVy-b7Z~xPvwns1Dy4vTpdmzlJFVmKNnm~aqRKs96YkOoJhp3jurOLBhULVREP8luMC3SuQLRiIHbexhs~rosStKsY229qxP1zuIDyJg4rAgz1tPgaIuD9azXQXzjfld~C-psdYbfmFZ2tlIhrNdx9a2NEpq5EpOT180l219EYRTgBDkMPQyo1RTZp3~coAGY8jKoi5OyzRB4Lqy56OAJDk4w__',
    'https://s3-alpha-sig.figma.com/img/0672/74cc/b85889373df836cacab863d0a33856b7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otdbgYceHkbIXlZY1eVpzNbkD-Y3W8pkHM2BHdQq5IgtiSN14eewRkHAbsGnmSxgdFNrZAS6Xdvv6SdDT13bVxDs4pJJr7t685b9twt3JDZf4nthbYKNKvPa9BiYZn9YY8wqH--W5vG3iLl4B8UkV2rkX26HLdR5eCyL7Q6RW4A7V2iZy0HoHS3IUqnFGwxDoGP7lPCsqS5ZoSH9fQn5-I0uAJh26M9Wzs3fFjJSBcLcGQ3WqPq6lXIEfnjnLy6Tqktck4vzCIWWP3MncwsiLo4TWcrK85yys5h4a5GqHupC2mYIUbWcmqooVTpbmAVHGwabr4OxnfYT6IIl-gtBrA__',
    'https://s3-alpha-sig.figma.com/img/a0be/ca2e/ad5cd9a1891e67b8f03ec1f7e057fdea?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUq2NaDetGuuFWyKRTF7r1QhtFwNe4rY4lwujFeIdnQfVkuWqDC0wyKDe8Oo2MXaHDg1ctS6ONMgtbd6vDmC5NRFAf4YICbFPETD5pvXXWcqbpO~k~5deZGzDr8fLOcQJeyxdVFEGmFFhfzJfj-6CW36ky~iSaq6bbponOKnWFgkNEAhtwLqShU~X91FkzgL68BgFoqoL3DhJGBAinNmVxBLCn7wF4qQK5xbAmxLQ82PbtW8050cR0CIfvXMY3~stU1Qf0zTjrIKyOsXjY~PtQYmx3JgpjJRlIKC6J-1wPSjHwuooHpF6Xi7dHAIvbDK3YXzbA9E8JE5524XkWY-nw__',
    'https://s3-alpha-sig.figma.com/img/4368/5bbb/fc0d5537958bf1580dd59e4acbfeadcd?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMYihukcwXqxM7iYG1VcFLWXqcfXvaHvCtqKX09ZtSQyWJqIUG4TJH75tHyTJ0va4VbvjpudCMLu7KR~R~SS-5UH3jIq4LLwyqG0EzRYjgxrZ1geuStHlU60Hz1B8lKSvZfTxtMvDXKMFAqihD9URF2EiXOYs~Y2CvG2-rXyyC4jgxFK4PtDE0FSBlYhP-hIrHLBClRHU4GNoNSlW91lVqUzASTEnfjxqauswaNfQbSrvER6JoW0ig-DInzmp082czFzXO~wTNuvrSQ-WFkqWC~ABWF83wOkp4mvbaImaT~YywUXy69rcRu2MVrBjLPLBDK9lR83o9pHK46hTt1qjQ__',
  ]);

  const addImages = () => {
    if (images.length < 9) {
      setImages(prevImages => [
        ...prevImages,
        'https://s3-alpha-sig.figma.com/img/ae6b/6229/6c51e9c3e8622832317244cff583e971?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hweZMoB4504te8F7s8cMXvNfVdLa7ogyoAcJ0mTZmOb-85VvmZ3Kdf1aBpotSNUnC-25prYzm3WvT12-FzE8v3X~iCsCoXibqQ1y89Y9ooKrCu7lgu6lh4ZZv9qI-PhrUMdq-eWyXUkshFlRxN6D7o8c3VPihzZ7FK41BHnnotnVcnsECJx~J1DXMFuuGR46~AWBliGyjwYulbbcdCyCLZJoti9Nj~pbXQXWS1tVWInJ8F5L1HZGLqU4E4tAnSa~RMr13YWMnFDY2cQ5-FRAkWr6kmZrxJLnWf4sNBK7QFoMyqI7wsZIzbCulzxV7TxEUkHEO3GVsRNOQ3xHgRVNVw__',
        'https://s3-alpha-sig.figma.com/img/6649/1413/08301bfe0d5748a97e968467424c5922?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5BSWb8qq5RybXTptq8bmhxoBI6vKm~C1HNFmDg8gPYIHukrDYF-Qhp9WHz6nIWiMz2PRq8Q7fkzMVJ7kszlAZQxiOpC2OUox5UhVMKEMHwJDAOevgpODyY5uitqDs6kDmZb1qlsH1dOJbq5sGkibEbOeaC~zqLC6oEvDnwmdpydZk22u1DQj6mXnO4mOZyfXh1IGNSmSMbmvJIIcoIO26dy6aX512yEDFz9nnAxnEBT6OcsnhvX8TwKsLqpbH4tkr3wBGXrLS6SyG-VG16O-8sG-Xdzy0wkdtCNsiDOL6QANVZQzoD5d9TU2imWpe3F2Ca0MqOOGV84Y-m2SHpKWQ__',
        'https://s3-alpha-sig.figma.com/img/3f4a/d796/e4430f32ff625c7f3dfbb9de31e650cc?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXtzmNWFq8tyt03WrnY3hPfRWlUJ6eDfRM9kNwYsgIVvORMmU6TQjdob9jeqBbkFB3XBu1793yjaZMb10KPDWhRp-KHHwz6ye7N0QQJgR~nQUfSO31Kr9MCzfzxOLiVy-b7Z~xPvwns1Dy4vTpdmzlJFVmKNnm~aqRKs96YkOoJhp3jurOLBhULVREP8luMC3SuQLRiIHbexhs~rosStKsY229qxP1zuIDyJg4rAgz1tPgaIuD9azXQXzjfld~C-psdYbfmFZ2tlIhrNdx9a2NEpq5EpOT180l219EYRTgBDkMPQyo1RTZp3~coAGY8jKoi5OyzRB4Lqy56OAJDk4w__',
      ].slice(0, 9));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <h2 className="text-2xl font-semibold text-center">Cute Pets Gallery</h2>
      <div className="grid grid-cols-3 gap-4 mt-4 w-full">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto md:w-full" />
        ))}
      </div>
      {images.length < 9 && (
        <button onClick={addImages} className="mt-6 mx-auto block bg-orange-500 text-white p-2 rounded-lg">More</button>
      )}
    </div>
  );
};

export default Cards;
