import React, { useState } from 'react';

const CustomerSupport = ({language}) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="w-full max-w-5xl mx-auto border border-white backdrop-blur-md opacity-95 shadow-2xl shadow-black rounded-lg p-6 mb-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl capitalize font-bold mb-4 text-center text-white">
                { language === 'hindi' ? 'हमें एक संदेश भेजें' : 'Send Us a Message'}
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly h-full space-y-6 md:space-y-0">
                <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 backdrop-blur-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            { language === 'hindi' ? 'नाम' : 'Name'}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                            { language === 'hindi' ? 'फ़ोन नंबर' : 'Phone Number'}
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            { language === 'hindi' ? 'ईमेल' : 'Email'}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                            { language === 'hindi' ? 'संदेश' : 'Message'}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300"
                    >
                        { language === 'hindi' ? 'प्रस्तुत करें' : 'Submit'}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CustomerSupport;