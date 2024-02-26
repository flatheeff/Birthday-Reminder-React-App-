import React, { useState, useEffect } from "react";
import { Button, Modal, Card } from "flowbite-react";


const SingleEmployee = ({employees}) => {
  const [openModal, setOpenModal] = useState(false);
  
  const [singleObject, setsingleObject] = useState({})

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {employees.map((item) => (
        <div key={item.id} className="w-full">
          <section>
            <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
              <div class="">
                <div
                  onClick={() => {
                    setOpenModal(true)
                    setsingleObject(item)
                  }}
                  class="text-center text-gray-500 dark:text-gray-400"
                >
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src={item.Employee_img}
                    alt=""
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                    <a href="#">{item.Employee_Name}</a>
                  </h3>
                  <p className="text-black text-bold">{item.Status}</p>
                </div>
              </div>
            </div>

            {/* EmployeeDetailModal */}
            <div>
              <Modal
                className=" w-full px-80 bg-opacity-45"
                show={openModal}
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header>{singleObject.Employee_Name}</Modal.Header>
                <Modal.Body>
                  <Card className="" horizontal>
                    <div className="w-full flex flex-col items-center justify-center p-14">
                      <div className="flex items-center justify-center gap-5">
                        <img
                          class="mx-auto mb-4 w-36 h-36 "
                          src={singleObject.Employee_img}
                          alt=""
                        />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {singleObject.Employee_Name}
                        </h5>
                      </div>

                      <p className="font-normal text-black">
                        {singleObject.Status}
                      </p>
                      <div className="flex justify-between text-lg font-bold gap-64 items-center justify-center">
                      <div className="flex w-full justify-between  gap-2 items-center px-5 justify-center">
                        <p className="border-2 p-3 rounded-xl">
                          {singleObject.Date}
                        </p>
                        <p className="border-2 p-3 rounded-xl">
                          {singleObject.Month}
                        </p>
                        <p className="border-2 p-3 rounded-xl">
                          {singleObject.Year}
                        </p>
                        </div>
                        <div className="items-center justify-between justify-center">
                        <p className="border-2 p-3 rounded-xl">{singleObject.Gender}</p>
                        </div>
                      </div>
                      
                       
                      </div>
                    
                  </Card>
                </Modal.Body>
              </Modal>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default SingleEmployee;
