import { useWaitlist } from "../Context/WaitlistContext";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Overlay,
  ModalContainer,
  Header,
  Input,
  SubmitButton,
  SuccessMessage,
  Error,
} from "./ModalStyle";

export default function WaitlistModal() {
  const {
    showModal,
    closeModal,
    fullName,
    email,
    setFullName,
    setEmail,
    submitWaitlist,
    loading,
    success,
    errorMsg,
  } = useWaitlist();

  if (!showModal) return null;

  return (
    <Overlay onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {!success ? (
          <>
            <Header>
              <h2>Join the Waitlist</h2>
              {!loading && (
                <MdOutlineCancel
                  size={28}
                  onClick={closeModal}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Header>

            <p>Be the first to access our solar kits.</p>

            {errorMsg && <Error>{errorMsg}</Error>}

            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <SubmitButton disabled={loading} onClick={submitWaitlist}>
              {loading ? "Submitting..." : "Join Waitlist"}
              {!loading && <IoIosArrowRoundForward size={32} />}
            </SubmitButton>
          </>
        ) : (
          <SuccessMessage>
            <h3>🎉 You're on the list!</h3>
            <p>Thank you for joining our waitlist.</p>
          </SuccessMessage>
        )}
      </ModalContainer>
    </Overlay>
  );
}
