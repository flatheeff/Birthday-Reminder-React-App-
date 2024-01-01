import React, { useState } from "react";
import { Button, Modal, Card } from "flowbite-react";
import EmployeeDetailModal from "./EmployeeDetailModal";

const SingleEmployee = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <section class="bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Our Employees
            </h2>
          </div>
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              onClick={() => setOpenModal(true)}
              class="text-center text-gray-500 dark:text-gray-400"
            >
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                <a href="#">Bonnie Green</a>
              </h3>
              <p>CEO/Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* EmployeeDetailModal */}
      <>
        <Modal
          className=" w-full p-80 bg-opacity-45"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>Bonnie Green</Modal.Header>
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
                    Bonnie Green
                </h5>
                </div>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolores officiis alias doloribus eveniet consequatur repellendus repudiandae nisi non, praesentium facilis quos provident excepturi possimus, minima nesciunt! Officiis, delectus rerum.
                </p>
                <div className="flex w-full justify-between pt-20">
                    <p className="border-2 p-3 rounded-xl">Date of birth</p>
                    <p className="border-2 p-3 rounded-xl">Gender</p>
                </div>
              </div>
            </Card>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default SingleEmployee;
