import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Button from "./Button";

const ResultModal = ({ isOpen, onClose, score }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-md" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="sr-only">Test Result</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-6 space-y-6">
          {/* Score Circle */}
          <div className="relative flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
              <span className="font-clash font-bold text-4xl text-white">
                {score}%
              </span>
            </div>
          </div>

          {/* Congratulatory Message */}
          <div className="text-center space-y-2">
            <p className="font-montserrat text-base text-accent">
              You scored <span className="font-semibold">{score}%</span> in your
              placement test.
            </p>
            <p className="font-montserrat text-base text-accent">
              Thank you for completing the test
            </p>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-32 h-10 rounded-lg transition-colors hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
