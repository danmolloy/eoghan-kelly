import Image from "next/image";

export default function Teaching() {
  return (
     <div className="flex flex-col pb-8 px-4">
          <h1 className="font-title text-3xl py-4">Teaching</h1>
          <div className="flex flex-col md:flex-row-reverse justify-evenly items-center md:items-start">
            <div className="flex items-center m-4">
    
                <Image  alt="Eoghan Kelly" width={400} height={400} src={"https://fillmurray.lucidinternets.com/400/400"}/>
            </div>
          <div className="md:w-[50vw] ">
            <p className="pb-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper dignissim diam, a pulvinar sem. Ut tincidunt placerat pretium. Suspendisse ornare ullamcorper neque vitae volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sodales maximus diam, eget faucibus justo commodo id. Cras purus ligula, gravida vitae neque vel, iaculis tempus mi. Nulla sit amet leo in nibh maximus pharetra. Praesent quis faucibus nisl. Etiam hendrerit tempor mi, sed ultricies justo dictum in.</p>
            <p className="pb-2 ">Praesent auctor libero eget semper fermentum. Nunc cursus nisl sit amet justo dictum porta. Pellentesque faucibus cursus suscipit. Morbi hendrerit placerat mi, et molestie est tristique sit amet. In sed diam ut nisl finibus finibus. Proin nec justo vel risus aliquam hendrerit et in dolor. Donec finibus, elit et egestas commodo, tortor massa facilisis libero, hendrerit dapibus orci neque ac odio.</p>
            <p className="pb-2 ">Nulla facilisi. Maecenas nec iaculis ligula. Fusce vel vehicula velit, eget euismod justo. Etiam at eleifend metus. Mauris pellentesque vestibulum ante sit amet facilisis. Proin vel mollis turpis, vel ornare nisl. Vestibulum tincidunt nibh ut erat vehicula sodales. Vestibulum pharetra gravida quam, vitae dapibus tortor dictum sed. Etiam eu leo scelerisque, viverra urna vitae, posuere orci. Suspendisse vehicula dictum metus. Integer tortor sapien, sollicitudin vel augue vitae, blandit fringilla mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. In hac habitasse platea dictumst.</p>
            <p className="pb-2 ">Suspendisse tincidunt mauris eu dictum tristique. Pellentesque in quam quis risus consequat auctor ac at justo. Morbi et cursus turpis, id luctus ante. Class.</p>
          </div>
          </div>
        </div>
  )
}