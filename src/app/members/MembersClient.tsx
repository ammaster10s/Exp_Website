"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { INTEREST_DEFS, type InterestId, type Member } from "./members-data";

type SortOption = "id-asc" | "id-desc" | "name-asc" | "role";
type ViewMode = "grid" | "list";

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: "id-asc", label: "Member ID up" },
  { id: "id-desc", label: "Member ID down" },
  { id: "name-asc", label: "Name A-Z" },
  { id: "role", label: "Role" },
];

const INTEREST_IDS = Object.keys(INTEREST_DEFS) as InterestId[];
const SELF_ID = "EXP-005";

function CropCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return (
    <span className={`exp-crop exp-crop--${pos}`} aria-hidden="true">
      <span className="exp-crop__h" />
      <span className="exp-crop__v" />
    </span>
  );
}

function InterestTag({ id, size = "sm" }: { id: InterestId; size?: "xs" | "sm" | "md" }) {
  const def = INTEREST_DEFS[id];

  return (
    <span className={`exp-tag exp-tag--${def.tone} exp-tag--${size}`}>
      <span className="exp-tag__glyph">{def.glyph}</span>
      <span className="exp-tag__th">{def.th}</span>
      <span className="exp-tag__en">{def.en}</span>
    </span>
  );
}

function SilhouetteAvatar({
  initials,
  size = 96,
  photoUrl,
}: {
  initials?: string;
  size?: number;
  photoUrl?: string;
}) {
  if (photoUrl) {
    return (
      <div
        className="exp-avatar exp-avatar--photo"
        role="img"
        aria-label="Member photo"
        style={{ width: size, height: size, backgroundImage: `url(${photoUrl})` }}
      />
    );
  }

  return (
    <div className="exp-avatar" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <circle cx="50" cy="50" r="49" fill="#e8e2cf" stroke="#16314a" strokeWidth="0.6" strokeDasharray="2 2" />
        <circle cx="50" cy="38" r="14" fill="#cfc8b3" />
        <path d="M20 88 C20 66, 80 66, 80 88 Z" fill="#cfc8b3" />
      </svg>
      <span className="exp-avatar__label">{initials || "รูปถ่าย"}</span>
      <span className="exp-avatar__tick exp-avatar__tick--tl" aria-hidden="true" />
      <span className="exp-avatar__tick exp-avatar__tick--tr" aria-hidden="true" />
      <span className="exp-avatar__tick exp-avatar__tick--bl" aria-hidden="true" />
      <span className="exp-avatar__tick exp-avatar__tick--br" aria-hidden="true" />
    </div>
  );
}

function MemberCard({
  member,
  onClick,
  isSelf,
}: {
  member: Member;
  onClick: (member: Member) => void;
  isSelf: boolean;
}) {
  return (
    <button
      className={`exp-mcard ${isSelf ? "exp-mcard--self" : ""}`}
      onClick={() => onClick(member)}
      aria-label={`${member.name.en} - open profile`}
    >
      <CropCorner pos="tl" />
      <CropCorner pos="tr" />
      <CropCorner pos="bl" />
      <CropCorner pos="br" />
      <div className="exp-mcard__head">
        <span className="exp-mcard__id">{member.id}</span>
        {isSelf && <span className="exp-mcard__self-tag">YOU</span>}
      </div>
      <div className="exp-mcard__photo">
        <SilhouetteAvatar initials="รูปถ่าย" size={84} photoUrl={member.photoUrl} />
      </div>
      <div className="exp-mcard__rule" />
      <div className="exp-mcard__field">
        <span className="exp-mcard__label">รหัส · ID</span>
        <span className="exp-mcard__val exp-mcard__val--mono">{member.id}</span>
      </div>
      <div className="exp-mcard__field">
        <span className="exp-mcard__label">ชื่อ-สกุล · Name</span>
        <span className="exp-mcard__val">{member.name.th}</span>
        <span className="exp-mcard__val exp-mcard__val--en">{member.name.en}</span>
      </div>
      <div className="exp-mcard__field">
        <span className="exp-mcard__label">ชื่อเล่น · Nick</span>
        <span className="exp-mcard__val">
          {member.nickname.th} <span className="exp-mcard__paren">({member.nickname.en})</span>
        </span>
      </div>
      <div className="exp-mcard__field">
        <span className="exp-mcard__label">ตำแหน่ง · Role</span>
        <span className="exp-mcard__val exp-mcard__val--small">{member.role.th}</span>
        <span className="exp-mcard__val exp-mcard__val--en">{member.role.en}</span>
      </div>
      <div className="exp-mcard__motto">
        <span className="exp-mcard__qmark">"</span>
        <span className="exp-mcard__motto-text">{member.motto.th}</span>
      </div>
      <div className="exp-mcard__field exp-mcard__field--last">
        <span className="exp-mcard__label">ความสนใจด้าน AI · AI Interests</span>
      </div>
      <div className="exp-mcard__tags">
        {member.interests.slice(0, 4).map((interest) => (
          <InterestTag key={interest} id={interest} size="xs" />
        ))}
        {member.interests.length > 4 && (
          <span className="exp-tag exp-tag--more exp-tag--xs">+{member.interests.length - 4}</span>
        )}
      </div>
    </button>
  );
}

function MemberRow({
  member,
  onClick,
  isSelf,
}: {
  member: Member;
  onClick: (member: Member) => void;
  isSelf: boolean;
}) {
  return (
    <button className={`exp-mrow ${isSelf ? "exp-mrow--self" : ""}`} onClick={() => onClick(member)}>
      <div className="exp-mrow__avatar">
        <SilhouetteAvatar size={48} photoUrl={member.photoUrl} />
      </div>
      <div className="exp-mrow__id">{member.id}</div>
      <div className="exp-mrow__name">
        <div className="exp-mrow__name-th">
          {member.name.th} <span className="exp-mrow__nick">({member.nickname.en})</span>
        </div>
        <div className="exp-mrow__name-en">{member.name.en}</div>
      </div>
      <div className="exp-mrow__role">{member.role.en}</div>
      <div className="exp-mrow__tags">
        {member.interests.slice(0, 3).map((interest) => (
          <InterestTag key={interest} id={interest} size="xs" />
        ))}
        {member.interests.length > 3 && (
          <span className="exp-tag exp-tag--more exp-tag--xs">+{member.interests.length - 3}</span>
        )}
      </div>
      <div className="exp-mrow__motto">&quot;{member.motto.en}&quot;</div>
      {isSelf && <span className="exp-mrow__self-tag">YOU</span>}
    </button>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="exp-modal-backdrop" onClick={onClose}>
      <div className="exp-modal" role="dialog" aria-modal="true" aria-labelledby="member-modal-title" onClick={(event) => event.stopPropagation()}>
        <CropCorner pos="tl" />
        <CropCorner pos="tr" />
        <CropCorner pos="bl" />
        <CropCorner pos="br" />
        <button className="exp-modal__close" onClick={onClose} aria-label="ปิด">x</button>

        <div className="exp-modal__head">
          <div className="exp-modal__id-block">
            <div className="exp-modal__id-label">EXP MEMBER FILE</div>
            <div className="exp-modal__id-num">{member.id}</div>
            <div className="exp-modal__id-meta">SHEET 01 / 01 · 1 : 1</div>
          </div>
          <div className="exp-modal__title-block">
            <h2 id="member-modal-title" className="exp-modal__name-th">{member.name.th}</h2>
            <div className="exp-modal__name-en">{member.name.en} · &quot;{member.nickname.en}&quot;</div>
            <div className="exp-modal__role">
              <span>{member.role.th}</span>
              <span className="exp-modal__sep">·</span>
              <span>{member.role.en}</span>
            </div>
          </div>
        </div>

        <div className="exp-modal__body">
          <div className="exp-modal__col exp-modal__col--left">
            <div className="exp-modal__photo-frame">
              <SilhouetteAvatar size={200} initials="รูปถ่าย" photoUrl={member.photoUrl} />
              <div className="exp-modal__photo-cap">PORTRAIT - {member.id}</div>
            </div>
            <dl className="exp-modal__facts">
              <dt>รหัสพนักงาน</dt><dd className="exp-mono">{member.id}</dd>
              <dt>ชื่อเล่น · Nickname</dt><dd>{member.nickname.th} <span className="exp-muted">({member.nickname.en})</span></dd>
              <dt>อีเมล · Email</dt><dd className="exp-mono"><a href={`mailto:${member.email}`}>{member.email}</a></dd>
              <dt>GitHub</dt><dd className="exp-mono">{member.github}</dd>
              <dt>LinkedIn</dt><dd className="exp-mono">{member.linkedin}</dd>
            </dl>
          </div>

          <div className="exp-modal__col exp-modal__col--right">
            <section className="exp-modal__sec">
              <div className="exp-modal__sec-label">คติประจำใจ · MOTTO</div>
              <blockquote className="exp-modal__motto">
                <span className="exp-modal__bigq">"</span>
                <p className="exp-modal__motto-th">{member.motto.th}</p>
                <p className="exp-modal__motto-en">{member.motto.en}</p>
              </blockquote>
            </section>

            <section className="exp-modal__sec">
              <div className="exp-modal__sec-label">เกี่ยวกับ · ABOUT</div>
              <p className="exp-modal__bio">{member.bio.th}</p>
              <p className="exp-modal__bio exp-modal__bio--en">{member.bio.en}</p>
            </section>

            <section className="exp-modal__sec">
              <div className="exp-modal__sec-label">ความสนใจด้าน AI · AI INTERESTS</div>
              <div className="exp-modal__tags">
                {member.interests.map((interest) => (
                  <InterestTag key={interest} id={interest} size="md" />
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="exp-modal__foot">
          <span>EXP YEARBOOK 2026 · MEMBER FILE {member.id}</span>
          <span>SCALE 1:1 · A4 · BLUEPRINT REV. C</span>
        </div>
      </div>
    </div>
  );
}

function Controls({
  q,
  setQ,
  filter,
  setFilter,
  sort,
  setSort,
  view,
  setView,
  total,
  shown,
}: {
  q: string;
  setQ: (q: string) => void;
  filter: InterestId[];
  setFilter: Dispatch<SetStateAction<InterestId[]>>;
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  view: ViewMode;
  setView: (view: ViewMode) => void;
  total: number;
  shown: number;
}) {
  return (
    <div className="exp-controls">
      <CropCorner pos="tl" />
      <CropCorner pos="tr" />
      <CropCorner pos="bl" />
      <CropCorner pos="br" />
      <div className="exp-controls__row">
        <div className="exp-search">
          <span className="exp-search__icon" aria-hidden="true">⌕</span>
          <input
            className="exp-search__input"
            placeholder="ค้นหาด้วยชื่อ · รหัส · ชื่อเล่น · Search by name, ID, nickname"
            value={q}
            onChange={(event) => setQ(event.target.value)}
          />
          {q && <button className="exp-search__clear" onClick={() => setQ("")} aria-label="Clear search">x</button>}
        </div>

        <div className="exp-ctl-group">
          <label className="exp-ctl-label exp-mono">SORT</label>
          <select className="exp-ctl-select" value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
            {SORT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="exp-ctl-group">
          <label className="exp-ctl-label exp-mono">VIEW</label>
          <div className="exp-seg">
            <button className={`exp-seg__b ${view === "grid" ? "exp-seg__b--on" : ""}`} onClick={() => setView("grid")}>Grid</button>
            <button className={`exp-seg__b ${view === "list" ? "exp-seg__b--on" : ""}`} onClick={() => setView("list")}>List</button>
          </div>
        </div>
      </div>

      <div className="exp-controls__row exp-controls__row--filters">
        <span className="exp-ctl-label exp-mono">FILTER · ความสนใจด้าน AI</span>
        <div className="exp-filter-tags">
          {INTEREST_IDS.map((interest) => (
            <button
              key={interest}
              className={`exp-ftag ${filter.includes(interest) ? "exp-ftag--on" : ""}`}
              onClick={() => setFilter((prev) => prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest])}
            >
              <InterestTag id={interest} size="xs" />
            </button>
          ))}
          {filter.length > 0 && (
            <button className="exp-ftag-clear exp-mono" onClick={() => setFilter([])}>CLEAR ({filter.length})</button>
          )}
        </div>
        <div className="exp-controls__count exp-mono">
          {shown.toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default function MembersClient({ members }: { members: Member[] }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<InterestId[]>([]);
  const [sort, setSort] = useState<SortOption>("id-asc");
  const [view, setView] = useState<ViewMode>("grid");
  const [active, setActive] = useState<Member | null>(null);

  const filtered = useMemo(() => {
    let list = members;
    const needle = q.trim().toLowerCase();

    if (needle) {
      list = list.filter((member) =>
        member.id.toLowerCase().includes(needle) ||
        member.name.th.toLowerCase().includes(needle) ||
        member.name.en.toLowerCase().includes(needle) ||
        member.nickname.th.toLowerCase().includes(needle) ||
        member.nickname.en.toLowerCase().includes(needle) ||
        member.role.en.toLowerCase().includes(needle)
      );
    }

    if (filter.length > 0) {
      list = list.filter((member) => filter.every((interest) => member.interests.includes(interest)));
    }

    return [...list].sort((a, b) => {
      if (sort === "id-asc") return a.id.localeCompare(b.id);
      if (sort === "id-desc") return b.id.localeCompare(a.id);
      if (sort === "name-asc") return a.name.en.localeCompare(b.name.en);
      if (sort === "role") return a.role.en.localeCompare(b.role.en);
      return 0;
    });
  }, [members, q, filter, sort]);

  return (
    <div className="exp-members-root" data-aesthetic="blueprint">
      <div className="exp-grid-overlay" aria-hidden="true" />
      <div className="exp-members-main">
        <section className="exp-hero">
          <div className="exp-hero__bar exp-mono">
            <span>SECTION 04 / 07</span>
            <span>EXP / MEMBERS</span>
            <span>SHEET M-001...M-030</span>
          </div>
          <div className="exp-hero__title">
            <h1 className="exp-hero__th">สมุดพกนักพัฒนา: บันทึกตัวตนสมาชิกทุกคน</h1>
            <div className="exp-hero__en">The Modern Blueprint Yearbook - Every Member, Drawn to Scale</div>
          </div>
          <div className="exp-hero__caption">
            <p>
              แต่ละคนคือหนึ่งหน้าในสมุดพก รวมทั้งหมด <b>{members.length}</b> คน ค้นหาด้วยรหัส ชื่อ หรือความสนใจ
              แล้วกดที่การ์ดเพื่อเปิดดูรายละเอียด
            </p>
            <p className="exp-hero__caption-en">
              Data is local placeholder content for now. Google Sheets or database sync can plug into the prepared member adapter later.
            </p>
          </div>
          <div className="exp-hero__readout exp-mono">
            SHOWING {filtered.length.toString().padStart(2, "0")} / {members.length.toString().padStart(2, "0")} ENTRIES
          </div>
        </section>

        <Controls
          q={q}
          setQ={setQ}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          total={members.length}
          shown={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="exp-empty exp-mono">NO ENTRIES MATCH - ลองล้างตัวกรองหรือคำค้นหา</div>
        ) : view === "grid" ? (
          <div className="exp-cards">
            {filtered.map((member) => (
              <MemberCard key={member.id} member={member} onClick={setActive} isSelf={member.id === SELF_ID} />
            ))}
          </div>
        ) : (
          <div className="exp-rows">
            <div className="exp-rows__head exp-mono">
              <span>ID</span><span>NAME</span><span>ROLE</span><span>INTERESTS</span><span>MOTTO</span>
            </div>
            {filtered.map((member) => (
              <MemberRow key={member.id} member={member} onClick={setActive} isSelf={member.id === SELF_ID} />
            ))}
          </div>
        )}
      </div>

      {active && <MemberModal member={active} onClose={() => setActive(null)} />}
    </div>
  );
}
