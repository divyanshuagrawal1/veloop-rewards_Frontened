import { useState } from "react";
import {
  X,
  Wallet,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { formatNumber, veToCashUSD, veToCashINR } from "../../utils/formatters";
import styles from "./WalletModal.module.css";

export function WalletModal({ balance = 2450, onClose }) {
  const [bankName, setBankName] = useState("HDFC Bank Ltd.");
  const [accountNumber, setAccountNumber] = useState("•••• •••• 4892");
  const [withdrawAmount, setWithdrawAmount] = useState(1000);
  const [isSuccess, setIsSuccess] = useState(false);

  const minWithdrawal = 1000;
  const isEligible = balance >= minWithdrawal;
  const cashUSD = veToCashUSD(balance);
  const cashINR = veToCashINR(balance);

  const handleWithdraw = (e) => {
    e.preventDefault();
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

            {/* Threshold condition */}
            <div className={styles.thresholdAlert}>
              <ShieldCheck size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Withdrawal Condition Met!</strong>
                <p style={{ margin: "2px 0 0 0", color: "#cbd5e1" }}>
                  Minimum threshold is 1,000 VEs ($10.00). Your balance of {formatNumber(balance)} VEs qualifies for immediate direct bank withdrawal.
                </p>
              </div>
            </div>

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
                  max={balance}
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(Math.min(Number(e.target.value), balance))}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isEligible}
                className={styles.withdrawSubmitBtn}
              >
                <span>Withdraw to Linked Bank Account</span>
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
