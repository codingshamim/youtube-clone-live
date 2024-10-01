import CloseNotification from "./CloseNotification";

export default function NotificationModal() {
  return (
    <div
      id="hs-slide-down-animation-modal"
      className="hs-overlay size-full fixed top-2 flex justify-end    z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-slide-down-animation-modal-label"
    >
      <div className=" hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white shadow-sm rounded-xl pointer-events-auto dark:bg-secondaryBg dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-slide-down-animation-modal-label"
              className="font-bold text-gray-800 dark:text-white"
            >
              Notificatons
            </h3>
            <CloseNotification />
          </div>
          <div className=" h-[75vh] overflow-y-auto">
            <div className="p-4 overflow-y-auto flex  gap-2">
              <img
                className="w-[55px] h-[55px] rounded-[50%] object-cover"
                src="https://yt3.ggpht.com/ytc/AIdro_mM7fKZXxnPa31BnDpQoqX3PYXNjp7NdijCxqCNn0FpDyI=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div>
                <h1 className="text-xl font-medium">Jamuna Tv</h1>
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  officiis tempora numquam assumenda. Ut earum, accusantium
                  architecto sequi, voluptatibus fuga dolore vitae at nam
                  adipisci explicabo sed mollitia eaque quo.
                </p>
                <p className="text-gray-400 mt-4 text-sm">23 Hours Ago</p>
              </div>
              <hr className="mt-2" />
            </div>
            <div className="p-4 overflow-y-auto flex  gap-2">
              <img
                className="w-[55px] h-[55px] rounded-[50%] object-cover"
                src="https://yt3.ggpht.com/ytc/AIdro_mM7fKZXxnPa31BnDpQoqX3PYXNjp7NdijCxqCNn0FpDyI=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div>
                <h1 className="text-xl font-medium">Jamuna Tv</h1>
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  officiis tempora numquam assumenda. Ut earum, accusantium
                  architecto sequi, voluptatibus fuga dolore vitae at nam
                  adipisci explicabo sed mollitia eaque quo.
                </p>
                <p className="text-gray-400 mt-4 text-sm">23 Hours Ago</p>
              </div>
              <hr className="mt-2" />
            </div>
            <div className="p-4 overflow-y-auto flex  gap-2">
              <img
                className="w-[55px] h-[55px] rounded-[50%] object-cover"
                src="https://yt3.ggpht.com/ytc/AIdro_mM7fKZXxnPa31BnDpQoqX3PYXNjp7NdijCxqCNn0FpDyI=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <div>
                <h1 className="text-xl font-medium">Jamuna Tv</h1>
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  officiis tempora numquam assumenda. Ut earum, accusantium
                  architecto sequi, voluptatibus fuga dolore vitae at nam
                  adipisci explicabo sed mollitia eaque quo.
                </p>
                <p className="text-gray-400 mt-4 text-sm">23 Hours Ago</p>
              </div>
              <hr className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
