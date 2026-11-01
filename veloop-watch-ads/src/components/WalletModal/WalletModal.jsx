import { useState } from "react";
import {
  X,
  Wallet,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Lock,
} from "lucide-react";
import { formatNumber, veToCashUSD, veToCashINR } from "../../utils/formatters";
import styles from "./WalletModal.module.css";

export function WalletModal({ balance = 0, onClose }) {
  const [bankName, setBankName] = useState("HDFC Bank Ltd.");
  const [accountNumber, setAccountNumber] = useState("•••• •••• 4892");
  const [withdrawAmount, setWithdrawAmount] = useState(Math.max(balance, 1000));
  const [isSuccess, setIsSuccess] = useState(false);

  const minWithdrawal = 1000;
  const isEligible = balance >= minWithdrawal;
  const cashUSD = veToCashUSD(balance);
  const cashINR = veToCashINR(balance);
  const progressPercent = Math.min(Math.round((balance / minWithdrawal) * 100), 100);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!isEligible) return;
    setIsSuccess(true);
  };

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            <Wallet size={18} style={{ color: "#a855f7" }} />
            <span>My VELOOP Wallet</span>
          </h3>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {isSuccess ? (
          <div className={styles.receiptContainer}>
            <div className={styles.receiptCheckCircle}>
              <CheckCircle2 size={36} />
            </div>
            <h4 className={styles.receiptTitle}>Withdrawal Initiated!</h4>
            <p className={styles.receiptDesc}>
              A payout request of <strong>{withdrawAmount} VEs (${(withdrawAmount * 0.01).toFixed(2)} USD)</strong> has been submitted to your linked account <strong>{accountNumber}</strong>. Funds typically arrive within 1-2 business hours.
            </p>
            <button
              type="button"
              className={styles.withdrawSubmitBtn}
              onClick={onClose}
              style={{ width: "100%", marginTop: "16px" }}
            >
              Done
            </button>
          </div>
        ) : (
          <div className={styles.modalBody}>
            {/* Balance Overview Card */}
            <div className={styles.balanceCard}>
              <div>
                <p className={styles.balanceLabel}>Available VE Tokens</p>
                <h4 className={styles.balanceDigits}>
                  {formatNumber(balance)} <small style={{ fontSize: "14px", color: "#f59e0b" }}>VE</small>
                </h4>
              </div>

              <div className={styles.cashEquiv}>
                <p className={styles.cashLabel}>Estimated Cash Value</p>
                <h4 className={styles.cashVal}>${cashUSD} USD</h4>
                <small style={{ color: "#94a3b8", fontSize: "11px" }}>
                  &#8776; &#8377;{cashINR} INR
                </small>
              </div>
            </div>

            {/* Exchange Rate Info */}
            <div className={styles.conversionRateBadge}>
              <span>Exchange Rate: 100 VEs = $1.00 USD</span>
              <span style={{ color: "#10b981", fontWeight: 700 }}>Fixed Rate Guarantee</span>
            </div>

            {/* Threshold condition status */}
            {isEligible ? (
              <div className={styles.thresholdAlert}>
                <ShieldCheck size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong>Withdrawal Condition Met!</strong>
                  <p style={{ margin: "2px 0 0 0", color: "#cbd5e1" }}>
                    Minimum threshold is 1,000 VEs ($10.00). Your balance of {formatNumber(balance)} VEs qualifies for immediate direct bank withdrawal.
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  background: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f59e0b", fontWeight: 700, fontSize: "13px" }}>
                    <Lock size={16} />
                    <span>Minimum Withdrawal: 1,000 VEs ($10.00)</span>
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#fef08a" }}>
                    {formatNumber(balance)} / 1,000 VEs ({progressPercent}%)
                  </span>
                </div>

                <div style={{ width: "100%", height: "6px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "6px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${progressPercent}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #f59e0b, #10b981)",
                      borderRadius: "6px",
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>

                <p style={{ margin: 0, fontSize: "11.5px", color: "#94a3b8" }}>
                  Watch more sponsor ads to earn the remaining {formatNumber(1000 - balance)} VEs and unlock bank transfers.
                </p>
              </div>
            )}

            {/* Withdraw form */}
            <form onSubmit={handleWithdraw} className={styles.withdrawForm}>
              <div>
                <label className={styles.formLabel}>Linked Bank</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.formLabel}>Account Number</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.formLabel}>Tokens to Cash Out (Min: 1,000 VEs)</label>
                <input
                  type="number"
                  className={styles.formInput}
                  min={1000}
                  max={Math.max(balance, 1000)}
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                  disabled={!isEligible}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isEligible}
                className={styles.withdrawSubmitBtn}
                style={{
                  opacity: !isEligible ? 0.6 : 1,
                  cursor: !isEligible ? "not-allowed" : "pointer",
                }}
              >
                <span>
                  {isEligible
                    ? "Withdraw to Linked Bank Account"
                    : `Earn ${formatNumber(1000 - balance)} more VEs to unlock`}
                </span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default WalletModal;
