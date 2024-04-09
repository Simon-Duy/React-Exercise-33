import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const CartModal = ({ isOpen, closeModal, arrCart, updateTotalShoeCart, deleteShoeCart }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-5">Giỏ hàng của bạn</h3>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Tên Sản phẩm
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Hình ảnh
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Số lượng
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Giá tiền
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Hành động
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {arrCart.map((shoe, index) => {
                        return (
                          <tr key={index}>
                            <th className="px-6 py-4">{shoe.name}</th>

                            <td className="px-6 py-4">
                              <img className="w-20" src={shoe.image} alt="Đây là Hình ảnh Giày bạn chọn" />
                            </td>

                            <td className="px-6 py-4 space-x-4">
                              <button onClick={() => {
                                updateTotalShoeCart(shoe.id, "minus")
                              }} className="py-2 px-2 text-white bg-black rounded-md"><i className="fa-solid fa-minus"></i></button>

                              <span className="font-bold text-xl text-blue-400">{shoe.total}</span>

                              <button onClick={() => {
                                updateTotalShoeCart(shoe.id, "plus")
                              }} className="py-2 px-2 text-white bg-black rounded-md"><i className="fa-solid fa-plus"></i></button>
                            </td>

                            <td className="px-6 py-4">${shoe.price * shoe.total}</td>

                            <td className="px-6 py-4">
                              <button onClick={() => {
                                deleteShoeCart(shoe.id);
                              }} className="py-2 px-5 text-white bg-red-500 rounded-md">Xóa</button>
                            </td>
                          </tr>
                        );
                      })}
                      

                    </tbody>
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CartModal