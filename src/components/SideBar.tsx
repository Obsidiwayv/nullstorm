import { Home16Filled, Play24Filled } from "@fluentui/react-icons";
import { Button, Link, User } from "@nextui-org/react";

const placeholder_items = ["nuh uh"];

export default function () {
    const padding = "p-6";
    return (
        <div className="fixed inset-y-0 left-0 w-18 navbar overflow-hidden">
        {/* Non-scrolling elements */}
        <div className="h-full flex flex-col justify-between z-10 relative">
          <div className="overflow-hidden">
            <div className={padding}>
              <User name="Cotton Eye Joe" />
            </div>
            {/* Add other user interface elements here */}
          </div>
          {/* Background for non-scrolling elements */}
          <div className="absolute inset-0 bg-rgb-10-10-10 z-0"></div>
        </div>
        
        {/* Scrolling content */}
        <div className="h-full overflow-y-auto">
          <div className={padding}>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-6 z-10">
          <div>
            <div className={padding}>
              <Button
                size="lg"
                color="warning"
                variant="bordered"
                endContent={<Play24Filled />}
              >
                Launch
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}