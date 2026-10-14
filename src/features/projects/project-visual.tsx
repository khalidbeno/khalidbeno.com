import type { Locale } from '@/config/locales';
import type { ProjectConcept } from '@/content/project-concepts';
import { Icon } from '@/components/ui/icon';

function InventoryVisual({ locale }: { locale: Locale }) {
  return (
    <div
      className="project-visual project-visual--inventory"
      aria-hidden="true"
    >
      <div className="inventory-console">
        <aside className="inventory-nav">
          <Icon name="code" />
          <span>Inventory</span>
          <span>Integrations</span>
          <span>Logs</span>
          <span>Settings</span>
        </aside>
        <div className="inventory-body">
          <div className="inventory-toolbar">
            <strong>{locale === 'es' ? 'Inventario' : 'Inventory'}</strong>
            <span className="mock-search" />
          </div>
          <svg className="inventory-chart" viewBox="0 0 280 80">
            <path
              d="M0 68H280M0 40H280M0 12H280"
              stroke="#e5eaf5"
              fill="none"
            />
            <path
              d="M0 58C24 58 28 18 52 28S86 68 110 42 135 12 155 36 183 62 204 25 230 10 248 29 266 28 280 17"
              stroke="#9ca7df"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="inventory-modules">
            <div>
              <Icon name="box" />
              <span>{locale === 'es' ? 'Catálogo' : 'Catalog'}</span>
              <i />
              <i />
            </div>
            <div>
              <Icon name="network" />
              <span>
                {locale === 'es' ? 'Sincronización' : 'Synchronization'}
              </span>
              <i />
              <i />
            </div>
          </div>
          <div className="inventory-rows">
            {['Validation', 'Logging', 'API services'].map((label) => (
              <div key={label}>
                <span className="mock-dot" />
                <span>{label}</span>
                <i />
                <Icon name="check" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="integration-panel">
        {['Shopify', 'Stripe', 'Amazon', 'Custom API'].map((name, index) => (
          <div key={name}>
            <span className={'integration-symbol integration-symbol--' + index}>
              {index === 3 ? <Icon name="code" /> : name[0]}
            </span>
            <span>{name}</span>
            <i />
          </div>
        ))}
      </div>
      <span className="inventory-float inventory-float--cloud">
        <Icon name="cloud" />
      </span>
      <span className="inventory-float inventory-float--box">
        <Icon name="box" />
      </span>
      <span className="inventory-float inventory-float--code">
        <Icon name="code" />
      </span>
    </div>
  );
}

function Cube({
  x,
  y,
  size = 38,
  dark = false,
}: {
  x: number;
  y: number;
  size?: number;
  dark?: boolean;
}) {
  const h = size / 2;
  return (
    <g transform={'translate(' + x + ' ' + y + ')'}>
      <polygon
        points={
          '0,0 ' + h + ',' + -h / 2 + ' ' + size + ',0 ' + h + ',' + h / 2
        }
        fill={dark ? '#65718f' : '#f5f8ff'}
        stroke="#fff"
        strokeWidth="1"
      />
      <polygon
        points={
          '0,0 ' + h + ',' + h / 2 + ' ' + h + ',' + h * 1.3 + ' 0,' + h * 0.8
        }
        fill={dark ? '#374565' : '#d7e0f1'}
      />
      <polygon
        points={
          h +
          ',' +
          h / 2 +
          ' ' +
          size +
          ',0 ' +
          size +
          ',' +
          h * 0.8 +
          ' ' +
          h +
          ',' +
          h * 1.3
        }
        fill={dark ? '#485575' : '#e5ebf7'}
      />
    </g>
  );
}

function InfrastructureVisual({ security }: { security: boolean }) {
  return (
    <div
      className={
        'project-visual project-visual--' + (security ? 'security' : 'cloud')
      }
      aria-hidden="true"
    >
      <svg viewBox="0 0 340 270" className="infra-scene">
        <defs>
          <linearGradient
            id={security ? 'security-base' : 'cloud-base'}
            x2="0"
            y2="1"
          >
            <stop stopColor="#f7faff" />
            <stop offset="1" stopColor="#ced9ef" />
          </linearGradient>
        </defs>
        <ellipse
          cx="178"
          cy="218"
          rx="124"
          ry="24"
          fill="#dbe3f3"
          opacity=".5"
        />
        <g
          fill={'url(#' + (security ? 'security-base' : 'cloud-base') + ')'}
          stroke="#fff"
          strokeWidth="1"
        >
          <path d="M30 180 178 107 316 174 178 250Z" />
          <path d="M30 180v14l148 70v-14ZM178 250v14l138-76v-14Z" />
          <path d="M65 150 179 94 284 147 178 203Z" />
          <path d="M65 150v12l113 54v-13ZM178 203v13l106-57v-12Z" />
        </g>
        <path
          d="M58 188 177 129 296 183M100 228V151M226 232V137"
          stroke="#c7d3ec"
          fill="none"
          strokeWidth="1"
        />
        {security ? (
          <>
            <Cube x={63} y={157} dark />
            <Cube x={239} y={163} dark />
            <Cube x={248} y={82} size={43} dark />
            <path
              d="M83 174 172 128 259 179M174 128 268 103"
              stroke="#9caad0"
              strokeWidth="2"
              fill="none"
            />
            <g className="security-shield">
              <path
                d="M166 45 213 68v47c0 38-46 68-46 68s-46-30-46-68V68Z"
                fill="#7582ae"
                stroke="#e4eaff"
                strokeWidth="2"
              />
              <path d="m166 53 37 19v43c0 28-36 56-36 56V53Z" fill="#445579" />
              <path
                d="m166 84-15 8v15c0 13 15 23 15 23s15-10 15-23V92Z"
                fill="none"
                stroke="#f8faff"
                strokeWidth="2"
              />
              <path
                d="m159 106 5 5 10-12"
                fill="none"
                stroke="#f8faff"
                strokeWidth="2"
              />
            </g>
            <path
              d="M266 77v17m5-23v23m5-14v14"
              stroke="white"
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <Cube x={75} y={91} />
            <Cube x={222} y={173} />
            <Cube x={118} y={198} size={30} />
            <g className="cloud-emblem">
              <path
                d="M120 124c-26 0-30-37-7-47 0-36 45-49 63-19 29-7 45 17 37 35 34 18 20 52-3 48Z"
                fill="#f9fbff"
                stroke="#fff"
                strokeWidth="2"
              />
              <path
                d="M120 124c25 3 65 18 89 17l-13-26c-1-30-28-40-39-26-13-3-30 11-37 35Z"
                fill="#e5eaff"
                opacity=".9"
              />
              <text
                x="144"
                y="110"
                fill="#34435e"
                fontSize="30"
                fontWeight="650"
                fontFamily="system-ui"
              >
                AWS
              </text>
            </g>
            <path
              d="M94 83v19m-5-14 5-5 5 5M83 108h23"
              stroke="#8999bc"
              strokeWidth="1.5"
              fill="none"
            />
          </>
        )}
        <g stroke="#fff" strokeWidth="1.5">
          <path d="M294 48v17m-8-8h16M44 129v13m-6-6h12" />
        </g>
      </svg>
    </div>
  );
}

export function ProjectVisual({
  kind,
  locale,
}: {
  kind: ProjectConcept['id'];
  locale: Locale;
}) {
  return kind === 'inventory' ? (
    <InventoryVisual locale={locale} />
  ) : (
    <InfrastructureVisual security={kind === 'security'} />
  );
}
