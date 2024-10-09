import Image from "next/image";
import person1 from "/public/_assets/images/person1.jpg";
import person2 from "/public/_assets/images/person2.jpg";
import person3 from "/public/_assets/images/person3.jpg";
import person4 from "/public/_assets/images/person4.jpg";

const OutlineButton = () => {
    const persons = [person1, person2, person3, person4];
    return (
        <button className="w-full py-3 border border-primary-300 rounded">
            <div className="flex gap-1 justify-center items-center">
                <p>Talk to us</p>
                <div className="flex -space-x-1 ml-2">
                    {persons.map((person, index) => (
                        <Image
                            key={index}
                            src={person}
                            className="max-w-[1.5rem] rounded-full"
                            alt="Image of our members"
                        />
                    ))}
                </div>
            </div>
        </button>
    );
};

export default OutlineButton;
