import React, { useState, useEffect } from "react";
import { Button, Modal, Card } from "flowbite-react";
import supabase from "../supabase/Supabase";

const SingleEmployee = () => {
  const [openModal, setOpenModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [singleObject, setsingleObject] = useState({})

  const fetchEmployee = async () => {
    const { data, error } = await supabase
    .from("Birthday")
    .select();

    console.log(data);
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

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
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                    <a href="#">{item.Employee_Name}</a>
                  </h3>
                  <p>CEO/Co-founder</p>
                </div>
              </div>
            </div>

          {/* EmployeeDetailModal */}
          <div>
            <Modal
              className=" w-full p-80 bg-opacity-45"
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
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Bonnie Avatar"
                      />
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {singleObject.Employee_Name}
                      </h5>
                    </div>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia dolores officiis alias doloribus eveniet consequatur
                      repellendus repudiandae nisi non, praesentium facilis quos
                      provident excepturi possimus, minima nesciunt! Officiis,
                      delectus rerum.
                    </p>
                    <div className="flex w-full justify-between pt-20">
                      <p className="border-2 p-3 rounded-xl">
                        {singleObject.Date_of_Birth}
                      </p>
                      <p className="border-2 p-3 rounded-xl">{singleObject.Gender}</p>
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
