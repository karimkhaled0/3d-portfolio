import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
  id?: string;
};

const Project = ({ className, id }: Props) => {
  return (
    <div id={id} className={cn("h-[80vh]", className)}>
      {/* Header */}
      <div>
        {/* mobile Mock up */}

        {/* Title */}
      </div>

      {/* Footer */}
      <div>
        {/* Company */}

        {/* Links to project */}
      </div>
    </div>
  );
};

export default Project;
