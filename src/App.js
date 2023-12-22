import React from "react";

// Statik değerleri alın ve prop'ları kullanarak dinamik hale getirin
// Örneğin: label id, label text, input placeholder, input description
function FormInput({ label, name, type, placeholder, additionalText }) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      {additionalText && (
        <p className="mt-2 text-sm text-gray-500">{additionalText}</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        additionalText="Bunu sadece spam için kullanacağız."
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
        additionalText="Choose a strong password."
      />
    </form>
  );
}
