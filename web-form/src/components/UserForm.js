import React from 'react';
import { useForm } from 'react-hook-form';
import jsPDF from 'jspdf';

const UserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('User Information', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Name: ${data.name}`, 20, 40);
    doc.text(`Email: ${data.email}`, 20, 50);
    doc.text(`Address: ${data.address}`, 20, 60);
    doc.text(`Phone Number: ${data.phoneNumber}`, 20, 70);

    doc.setLineWidth(0.5);
    doc.line(20, 80, 190, 80);

     const timestamp = new Date().getTime();
    doc.save(`user-info-${timestamp}.pdf`);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">User Information Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input id="name" className="form-control" {...register('name', { required: true })} />
              {errors.name && <div className="text-danger">This field is required</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input id="email" type="email" className="form-control" {...register('email', { required: true })} />
              {errors.email && <div className="text-danger">This field is required</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <input id="address" className="form-control" {...register('address', { required: true })} />
              {errors.address && <div className="text-danger">This field is required</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input id="phoneNumber" className="form-control" {...register('phoneNumber', { required: true })} />
              {errors.phoneNumber && <div className="text-danger">This field is required</div>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;


