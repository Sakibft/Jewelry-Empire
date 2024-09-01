 

const Title = ({title,subTitle}) => {
  
    return (
        <div className="mt-10 mb-10">
              <h1 className="text-textYellow font-bold text-xl text-center">{title}</h1>
              <p className="text-sm text-smTexColor text-center">{subTitle}</p>
        </div>
    );
};

export default Title;