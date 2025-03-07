import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {

    const [ title, setTitle] = useState('');
    const [ type, setType] = useState('');
    const [ location, setLocation] = useState('');
    const [ description, setDescription] = useState('');
    const [ salary, setSalary] = useState('');
    const [ companyName, setCompanyName] = useState('');
    const [ companyDescription, setCompanyDescription] = useState('');
    const [ contactEmail, setContactEmail] = useState('');
    const [ contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            }
        }

        addJobSubmit(newJob);

        toast.success('Job Added Successfully');

        return navigate('/jobs')
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                                Job Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Job Listing Name
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Add any job duties, expectations, requirements, etc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                                Salary
                            </label>
                            <select
                                id="salary"
                                name="salary"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            >
                                <option value="₱0 - ₱10,000">₱0 - ₱10,000</option>
                                <option value="₱10,000 - ₱20,000">₱10,000 - ₱20,000</option>
                                <option value="₱20,000 - ₱30,000">₱20,000 - ₱30,000</option>
                                <option value="₱30,000 - ₱40,000">₱30,000 - ₱40,000</option>
                                <option value="₱40,000 - ₱50,000">₱40,000 - ₱50,000</option>
                                <option value="₱50,000 - ₱75,000">₱50,000 - ₱75,000</option>
                                <option value="₱75,000 - ₱100,000">₱75,000 - ₱100,000</option>
                                <option value="₱100,000 - ₱125,000">₱100,000 - ₱125,000</option>
                                <option value="₱125,000 - ₱150,000">₱125,000 - ₱150,000</option>
                                <option value="₱150,000 - ₱175,000">₱150,000 - ₱175,000</option>
                                <option value="₱175,000 - ₱200,000">₱175,000 - ₱200,000</option>
                            </select>

                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Company Location"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <h3 className="text-2xl mb-5">Company Info</h3>

                        <div className="mb-4">
                            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="companyDescription"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Company Description
                            </label>
                            <textarea
                                id="companyDescription"
                                name="companyDescription"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="What does your company do?"
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                id="contactEmail"
                                name="contactEmail"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Email address for applicants"
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactPhone" className="block text-gray-700 font-bold mb-2">
                                Contact Phone
                            </label>
                            <input
                                type="tel"
                                id="contactPhone"
                                name="contactPhone"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Optional phone for applicants"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>

                        <div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
                            Add Job
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddJobPage;
